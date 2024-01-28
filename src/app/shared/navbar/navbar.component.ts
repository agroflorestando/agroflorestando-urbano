import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, ActivationEnd, Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavbarItemsEnum } from '../../navbar/navbar-items.enum';
import { IconModule } from '../icon/icon.module';

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
  readonly CONTEXT_AUTHENTICATE = NavbarItemsEnum.AUTHENTICATE;
  readonly CONTEXT_CAMERA = NavbarItemsEnum.CAMERA;
  readonly CONTEXT_CONFIG = NavbarItemsEnum.CONFIG;

  current!: NavbarItemsEnum;

  private subscriptions = new Subscription();

  constructor(
    private route: Router
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

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
