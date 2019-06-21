import { RainbowDirective } from './../../directives/rainbow.directive';
import { PoneyComponent } from './../../components/poney/poney.component';
import { FilterPoneyPipe } from './../../pipes/filter-poney.pipe';
import { FormsModule } from '@angular/forms';
import { RaceCreateComponent } from './components/race-create/race-create.component';
import { RaceListComponent } from './components/race-list/race-list.component';
import { RaceComponent } from './../../components/race/race.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RaceRoutingModule } from './race-routing.module';
import { MaterialModule } from '../material/material.module';
import { PercentPipe } from 'src/app/pipes/percent.pipe';

@NgModule({
  declarations: [
    RaceListComponent,
    RaceCreateComponent,
    RaceComponent,
    FilterPoneyPipe,
    PoneyComponent,
    RainbowDirective,
    PercentPipe
  ],
  imports: [
    CommonModule,
    RaceRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class RaceModule { }
