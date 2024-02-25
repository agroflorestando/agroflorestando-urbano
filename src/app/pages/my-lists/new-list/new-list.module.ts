import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewListComponent } from './new-list.component';
import { RouterModule } from '@angular/router';
import { PickerComponent } from '@ctrl/ngx-emoji-mart';

@NgModule({
  declarations: [
    NewListComponent
  ],
  imports: [
    CommonModule,
    PickerComponent,
    RouterModule.forChild([
      {
        path: '',
        component: NewListComponent
      }
    ])
  ]
})
export class NewListModule { }
