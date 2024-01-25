import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablerIconsModule } from 'angular-tabler-icons';
import { IconTrees, IconMapSearch, IconQrcode, IconSettings, IconLockSquareRoundedFilled } from 'angular-tabler-icons/icons';
import { NavbarComponent } from './navbar.component';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    TablerIconsModule.pick({
      IconTrees,
      IconMapSearch,
      IconQrcode,
      IconSettings,
      IconLockSquareRoundedFilled
    })
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
