import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MyListsComponent } from './my-lists.component';
import { myListsRoutes } from './my-lists.routes';

@NgModule({
  declarations: [
    MyListsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      children: myListsRoutes
    }])
  ]
})
export class MyListsModule { }
