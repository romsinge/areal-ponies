import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PoneyComponent } from './components/poney/poney.component';
import { RainbowDirective } from './directives/rainbow.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { PercentPipe } from './pipes/percent.pipe';
import { RaceComponent } from './components/race/race.component';
import { FilterPoneyPipe } from './pipes/filter-poney.pipe';
import { UpperCasePipe } from '@angular/common';
import { RaceListComponent } from './components/race-list/race-list.component';
import { RaceCreateComponent } from './components/race-create/race-create.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PoneyCreateComponent } from './components/poney-create/poney-create.component';

@NgModule({
  declarations: [
    AppComponent,
    PoneyComponent,
    RainbowDirective,
    PercentPipe,
    RaceComponent,
    FilterPoneyPipe,
    RaceListComponent,
    RaceCreateComponent,
    PoneyCreateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UpperCasePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
