import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NavbarItemsEnum } from '../../navbar/navbar-items.enum';
import { IconModule } from '../icon/icon.module';
import { Subscription } from 'rxjs';

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
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.subscribeRoute();
  }
  
  private subscribeRoute(): void {
    this.subscriptions.add(this.activatedRoute.root.data.subscribe(
      data => {
        debugger;
        this.current = data['current']}
    ));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
