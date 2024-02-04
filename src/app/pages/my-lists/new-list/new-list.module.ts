import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewListComponent } from './new-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NewListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: NewListComponent
      }
    ])
  ]
})
export class NewListModule { }
