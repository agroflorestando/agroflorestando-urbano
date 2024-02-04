import { Routes } from "@angular/router";

export const myListsRoutes: Routes = [
  {
    path: 'lists',
    loadChildren: () => import('./lists-list/lists-list.module').then(m => m.ListsListModule),
  },

  {
    path: 'lists/new',
    loadChildren: () => import('./new-list/new-list.module').then(m => m.NewListModule),
  },

  {
    path: 'lists/:nevent',
    loadChildren: () => import('./plants-list/plants-list.module').then(m => m.PlantsListModule),
  },

  {
    path: '',
    redirectTo: 'lists',
    pathMatch: 'full'
  }
];
