import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavbarItemsEnum } from './navbar-items.enum';
import { IconModule } from '../shared/icon/icon.module';
import { AuthModalComponent } from '@shared/auth-modal/auth-modal.component';
import { ModalService } from '@belomonte/async-modal-ngx';

@Component({
  selector: 'agro-navbar',
  templateUrl: './navbar.component.html',
  standalone: true,
  imports: [
    IconModule,
    RouterModule
  ],
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit, OnDestroy {

  readonly CONTEXT_MY_PLANTS = NavbarItemsEnum.MY_PLANTS;
  readonly CONTEXT_SEARCH = NavbarItemsEnum.SEARCH;
  readonly CONTEXT_CAMERA = NavbarItemsEnum.CAMERA;
  readonly CONTEXT_CONFIG = NavbarItemsEnum.CONFIG;

  current!: NavbarItemsEnum;

  private subscriptions = new Subscription();

  constructor(
    private route: Router,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.subscribeRoute();
  }
  
  private subscribeRoute(): void {
    this.route.events.subscribe(event => {
      if (event instanceof ActivationEnd) {
        this.current = event.snapshot.data['current'];
      }
    });
  }

  openAuthenticationModal(): void {
    this.modalService
    .createModal(AuthModalComponent)
    .setData({
      title: 'Accounts',
      currentStep: 'select-account'
    })
    .build();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
