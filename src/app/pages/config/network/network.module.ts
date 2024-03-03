import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NetworkComponent } from './network.component';
import { TablerIconsModule } from 'angular-tabler-icons';
import { IconX } from 'angular-tabler-icons/icons';

@NgModule({
  declarations: [
    NetworkComponent
  ],
  imports: [
    CommonModule,
    TablerIconsModule.pick({
      IconX
    })
  ],
  exports: [
    NetworkComponent
  ]
})
export class NetworkModule { }
