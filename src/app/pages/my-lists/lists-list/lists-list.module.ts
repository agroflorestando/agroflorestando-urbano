import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TablerIconsModule } from 'angular-tabler-icons';
import { IconCaretRight, IconLock, IconPlus } from 'angular-tabler-icons/icons';
import { ListsListComponent } from './lists-list.component';

@NgModule({
  declarations: [
    ListsListComponent
  ],
  imports: [
    CommonModule,
    TablerIconsModule.pick({
      IconCaretRight,
      IconLock,
      IconPlus
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
