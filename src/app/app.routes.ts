import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'race',
    pathMatch: 'full'
  },
  {
    path: 'race',
    loadChildren: () => import('./modules/race/race.module').then(module => module.RaceModule)
  },
  {
    path: 'poney',
    loadChildren: () => import('./modules/poney/poney.module').then(module => module.PoneyModule)
  },
  {
    path: '**',
    redirectTo: 'race'
  }
]