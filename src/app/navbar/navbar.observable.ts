import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NavbarItemsEnum } from './navbar-items.enum';

@Injectable()
export class NavbarObservable extends Subject<NavbarItemsEnum> {
}
