import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { TablerIconsModule } from 'angular-tabler-icons';
import { IconCaretRight } from 'angular-tabler-icons/icons';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    TablerIconsModule.pick({
      IconCaretRight
    })
  ]
})
export class AuthModule { }
