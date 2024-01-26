import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'my-lists',
        loadChildren: () => import('./pages/my-lists/my-lists.module').then(m => m.MyListsModule),
      },

      {
        path: 'search',
        loadChildren: () => import('./pages/search/search.module').then(m => m.SearchModule),
      },

      {
        path: 'camera',
        loadChildren: () => import('./pages/camera/camera.module').then(m => m.CameraModule),
      },

      {
        path: 'config',
        loadChildren: () => import('./pages/config/config.module').then(m => m.ConfigModule),
      },

      {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full'
      }
    ]
  }
];
