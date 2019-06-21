import { AdminGuard } from './../../guards/admin.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PoneyCreateComponent } from './components/poney-create/poney-create.component';

const routes: Routes = [
  {
    path: 'create',
    component: PoneyCreateComponent,
    canActivate: [ AdminGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoneyRoutingModule { }
