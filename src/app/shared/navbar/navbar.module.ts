import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablerIconsModule } from 'angular-tabler-icons';
import { IconTrees, IconMapSearch, IconQrcode, IconSettings } from 'angular-tabler-icons/icons';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TablerIconsModule.pick({
      IconTrees,
      IconMapSearch,
      IconQrcode,
      IconSettings
    })
  ]
})
export class NavbarModule { }
