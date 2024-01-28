import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyListsComponent } from './my-lists.component';
import { RouterModule } from '@angular/router';
import { IconCaretRight, IconLock, IconWorld } from 'angular-tabler-icons/icons';
import { TablerIconsModule } from 'angular-tabler-icons';
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
