import { Component, Input } from '@angular/core';
import { IProfile } from '@domain/profile.interface';
import { IUnauthenticatedUser } from '@shared/security-service/unauthenticated-user';

@Component({
  selector: 'agro-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss']
})
export class ProfilePictureComponent {

  readonly defaultPicture = '/assets/profile/default-profile.png'; 

  @Input()
  tabindex?: number;

  @Input()
  profile: IProfile | null = null;

  @Input()
  account: IUnauthenticatedUser | null = null;

  getPicture(): string {
    if (this.profile && this.profile.picture) {
      return this.profile.picture;
    } else if (this.account && this.account.picture) {
      return this.account.picture;
    } else {
      return this.defaultPicture;
    }
  }

  getTitle(): string {
    if (this.profile) {
      return this.profile.display_name || this.profile.name || '';
    }

    return 'profile picture';
  }
}
