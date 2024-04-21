import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainModalComponent } from './main-modal.component';
import { AsyncModalModule } from '@belomonte/async-modal-ngx';
import { IconX } from 'angular-tabler-icons/icons';
import { TablerIconsModule } from 'angular-tabler-icons';

@NgModule({
  declarations: [
    MainModalComponent
  ],
  imports: [
    CommonModule,
    AsyncModalModule,
    TablerIconsModule.pick({
      IconX
    })
  ],
  exports: [
    MainModalComponent
  ]
})
export class MainModalModule { }
