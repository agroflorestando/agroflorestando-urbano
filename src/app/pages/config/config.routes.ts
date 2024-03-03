import { Routes } from '@angular/router';
import { ConfigComponent } from './config.component';
import { NetworkComponent } from './network/network.component';

export const configRoutes: Routes = [
  {
    path: 'network',
    component: NetworkComponent
  },

  {
    path: '',
    component: ConfigComponent,
    pathMatch: 'full'
  }
];
