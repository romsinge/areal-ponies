import { RaceService } from './services/race.service';
import { Race } from './models/race';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title: string = 'Areal'

  races: Race[] = []

  ngOnInit() {
    this.races = this.raceService.races
  }

  constructor(private raceService: RaceService) {}
}
