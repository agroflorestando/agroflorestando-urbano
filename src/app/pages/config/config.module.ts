import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigComponent } from './config.component';
import { RouterModule } from '@angular/router';
import { TablerIconsModule } from 'angular-tabler-icons';
import { IconCaretRight } from 'angular-tabler-icons/icons';

@NgModule({
  declarations: [
    ConfigComponent
  ],
  imports: [
    CommonModule,
    TablerIconsModule.pick({
      IconCaretRight
    }),
    RouterModule.forChild([
      {
        path: '',
        component: ConfigComponent
      }
    ])
  ]
})
export class ConfigModule { }
