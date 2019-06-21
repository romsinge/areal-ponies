import { FormGuard } from './../../guards/form.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RaceListComponent } from './components/race-list/race-list.component';
import { RaceCreateComponent } from './components/race-create/race-create.component';
import { RaceComponent } from 'src/app/components/race/race.component';

const routes: Routes = [
  {
    path: 'watch/:id',
    component: RaceComponent
  },
  {
    path: 'list',
    component: RaceListComponent
  },
  {
    path: 'create',
    component: RaceCreateComponent,
    canDeactivate: [ FormGuard ]
  },
  {
    path: '**',
    redirectTo: 'list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RaceRoutingModule { }
