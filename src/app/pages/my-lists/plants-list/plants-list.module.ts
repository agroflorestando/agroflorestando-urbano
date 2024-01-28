import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantsListComponent } from './plants-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PlantsListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PlantsListComponent
      }
    ])
  ]
})
export class PlantsListModule { }
