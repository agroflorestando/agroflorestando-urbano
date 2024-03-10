import { Routes } from '@angular/router';
import { NavbarItemsEnum } from './navbar/navbar-items.enum';

export const routes: Routes = [
  {
    path: 'my',
    data: {
      current: NavbarItemsEnum.MY_PLANTS
    },
    loadChildren: () => import('./pages/my-lists/my-lists.module').then(m => m.MyListsModule),
  },

  {
    path: 'search',
    data: {
      current: NavbarItemsEnum.SEARCH
    },
    loadChildren: () => import('./pages/search/search.module').then(m => m.SearchModule),
  },

  {
    path: 'camera',
    data: {
      current: NavbarItemsEnum.CAMERA
    },
    loadChildren: () => import('./pages/camera/camera.module').then(m => m.CameraModule),
  },

  {
    path: 'config',
    data: {
      current: NavbarItemsEnum.CONFIG
    },
    loadChildren: () => import('./pages/config/config.module').then(m => m.ConfigModule),
  },

  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  }
];
