import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PoneyCreateComponent } from './components/poney-create/poney-create.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoneyRoutingModule } from './poney-routing.module';
import { MaterialModule } from '../material/material.module';
import { PercentPipe } from 'src/app/pipes/percent.pipe';

@NgModule({
  declarations: [
    PoneyCreateComponent,
    PercentPipe
  ],
  imports: [
    CommonModule,
    PoneyRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PoneyModule { }
