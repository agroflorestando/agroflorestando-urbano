import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyListsComponent } from './my-lists.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MyListsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MyListsComponent
      }
    ])
  ]
})
export class MyListsModule { }
