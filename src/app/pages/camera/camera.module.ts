import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CameraComponent } from './camera.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CameraComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CameraComponent
      }
    ])
  ]
})
export class CameraModule { }
