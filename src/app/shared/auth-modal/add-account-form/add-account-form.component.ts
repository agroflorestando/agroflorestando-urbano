import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { NostrUser } from '@domain/nostr-user';
import { IProfile } from '@domain/profile.interface';
import { CustomValidator } from '@shared/custom-validator/custom-validator';
import { MainErrorObservable } from '@shared/main-error/main-error.observable';
import { NetworkErrorObservable } from '@shared/main-error/network-error.observable';
import { ProfileProxy } from '@shared/profile-service/profile.proxy';
import { NostrSecretStatefull } from '@shared/security-service/nostr-secret.statefull';
import { IUnauthenticatedUser } from '@shared/security-service/unauthenticated-user';
import { AuthModalSteps } from '../auth-modal-steps.type';
import { CameraObservable } from '@shared/camera-service/camera.observable';

@Component({
  selector: 'agro-add-account-form',
  templateUrl: './add-account-form.component.html',
  styleUrls: ['./add-account-form.component.scss']
})
export class AddAccountFormComponent {

  @Input()
  accounts: IUnauthenticatedUser[] = [];

  loading = false;
  submitted = false;

  showNostrSecret = false;
  showPin = false;

  @Output()
  changeStep = new EventEmitter<AuthModalSteps>();

  @Output()
  selected = new EventEmitter<IUnauthenticatedUser>();

  readonly pinLength = 8;

  accountForm = this.fb.group({
    nsec: ['', [
      Validators.required.bind(this),
      CustomValidator.nostrSecret
    ]],

    pin: ['', [
      Validators.required.bind(this),
    ]]
  });

  constructor(
    private fb: FormBuilder,
    private camera$: CameraObservable,
    private error$: MainErrorObservable,
    private profileProxy: ProfileProxy,
    private networkError$: NetworkErrorObservable,
    private nostrSecretStatefull: NostrSecretStatefull
  ) { }

  getFormControlErrors(fieldName: 'nsec' | 'pin'): ValidationErrors | null {
    return this.accountForm.controls[fieldName].errors;
  }

  getFormControlErrorStatus(fieldName: 'nsec' | 'pin', error: string): boolean {
    const errors = this.accountForm.controls[fieldName].errors || {};
    return errors[error] || false;
  }


  async onAddAccountSubmit(event: SubmitEvent): Promise<void> {
    event.stopPropagation();
    event.preventDefault();

    this.submitted = true;
    if (!this.accountForm.valid) {
      return;
    }

    const { pin, nsec } = this.accountForm.getRawValue()
    if (!nsec || !pin) {
      return;
    }

    const user = new NostrUser(nsec);
    this.loading = true;
    this.profileProxy
      .load(user.nostrPublic)
      .then(profile => this.addAccount(profile, user, pin ?? ''))
      .catch(e => this.networkError$.next(e))
      .finally(() => this.loading = false);
  }

  readQrcodeUsingCamera(pin?: HTMLInputElement): void {
    this.asyncReadQrcodeUsingCamera()
      .then(() => pin?.focus())
      .catch(e => this.error$.next(e))
  }

  async asyncReadQrcodeUsingCamera(): Promise<void> {
    const nsec = await this.camera$.readQrCode();
    this.accountForm.patchValue({ nsec });
    return Promise.resolve();
  }

  private addAccount(profile: IProfile, user: NostrUser, pin: string): void {
    if (profile.user.nostrSecret) {
      this.accountForm.reset();
      const unauthenticatedAccount = this.nostrSecretStatefull.addAccount({ ...profile, user }, pin);
      if (!unauthenticatedAccount) {
        this.changeStep.next('select-account');
      } else {
        this.selected.next(unauthenticatedAccount);
        this.changeStep.next('authenticate');
      }

    } else {
      this.accountForm.controls['nsec'].setErrors({
        nostrSecretNotFound: true
      });
    }
  }
}
