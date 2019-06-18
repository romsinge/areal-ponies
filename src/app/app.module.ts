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

@NgModule({
  declarations: [
    AppComponent,
    PoneyComponent,
    RainbowDirective,
    PercentPipe,
    RaceComponent,
    FilterPoneyPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    UpperCasePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
