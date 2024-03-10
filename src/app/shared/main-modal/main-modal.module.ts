import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainModalComponent } from './main-modal.component';
import { AsyncModalModule } from '@belomonte/async-modal-ngx';

@NgModule({
  declarations: [
    MainModalComponent
  ],
  imports: [
    CommonModule,
    AsyncModalModule
  ],
  exports: [
    MainModalComponent
  ]
})
export class MainModalModule { }
