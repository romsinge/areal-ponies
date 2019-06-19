
import { Routes } from '@angular/router'
import { RaceListComponent } from './components/race-list/race-list.component';
import { RaceCreateComponent } from './components/race-create/race-create.component';
import { RaceComponent } from './components/race/race.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'race-list',
    pathMatch: 'prefix'
  },
  {
    path: 'race-list',
    component: RaceListComponent
  },
  {
    path: 'race-create',
    component: RaceCreateComponent
  },
  {
    path: 'race/:id',
    component: RaceComponent
  },
  {
    path: '**',
    redirectTo: 'race-list'
  }
]