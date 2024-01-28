import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyListsComponent } from './my-lists.component';
import { RouterModule } from '@angular/router';
import { IconCaretRight, IconLock, IconWorld } from 'angular-tabler-icons/icons';
import { TablerIconsModule } from 'angular-tabler-icons';

@NgModule({
  declarations: [
    MyListsComponent
  ],
  imports: [
    CommonModule,
    TablerIconsModule.pick({
      IconCaretRight,
      IconWorld,
      IconLock
    }),
    RouterModule.forChild([
      {
        path: '',
        component: MyListsComponent
      }
    ])
  ]
})
export class MyListsModule { }
