import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NetworkComponent } from './network.component';
import { TablerIconsModule } from 'angular-tabler-icons';
import { IconWorld, IconWorldPlus, IconX } from 'angular-tabler-icons/icons';

@NgModule({
  declarations: [
    NetworkComponent
  ],
  imports: [
    CommonModule,
    TablerIconsModule.pick({
      IconX,
      IconWorld,
      IconWorldPlus
    })
  ],
  exports: [
    NetworkComponent
  ]
})
export class NetworkModule { }
