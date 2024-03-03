import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigComponent } from './config.component';
import { RouterModule } from '@angular/router';
import { TablerIconsModule } from 'angular-tabler-icons';
import { IconCaretRight } from 'angular-tabler-icons/icons';
import { configRoutes } from './config.routes';
import { NetworkModule } from './network/network.module';

@NgModule({
  declarations: [
    ConfigComponent
  ],
  imports: [
    CommonModule,
    NetworkModule,
    TablerIconsModule.pick({
      IconCaretRight
    }),
    RouterModule.forChild(configRoutes)
  ]
})
export class ConfigModule { }
