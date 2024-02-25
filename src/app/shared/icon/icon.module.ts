import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { IconLockSquareRoundedFilled, IconMapSearch, IconQrcode, IconSettings, IconTrees } from 'angular-tabler-icons/icons';

@NgModule({
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
    TablerIconsModule
  ]
})
export class IconModule { }
