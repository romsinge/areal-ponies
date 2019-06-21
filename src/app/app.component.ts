import { State } from './reducers/index';
import { Store } from '@ngrx/store';
import { Component, ViewEncapsulation } from '@angular/core';
import { InitRaces } from './actions/races.actions';
import { InitPonies } from './actions/ponies.actions';
import { RaceEntityService } from './services/race-entity-service';
import { PoneyEntityService } from './services/poney-entity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title: string = 'Areal'

  ngOnInit() {
    this.raceEntityService.getAll()
    this.poneyEntityService.getAll()
  }

  constructor(
    private raceEntityService: RaceEntityService,
    private poneyEntityService: PoneyEntityService,
    private store: Store<State>
  ) {}
}
