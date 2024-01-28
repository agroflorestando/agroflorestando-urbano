import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListsListComponent } from './lists-list.component';
import { RouterModule } from '@angular/router';
import { TablerIconsModule } from 'angular-tabler-icons';
import { IconCaretRight, IconLock, IconWorld } from 'angular-tabler-icons/icons';

@NgModule({
  declarations: [
    ListsListComponent
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
        component: ListsListComponent
      }
    ])
  ]
})
export class ListsListModule { }
