import { AddRace } from '../../../../actions/races.actions';
import { State } from '../../../../reducers/index';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { RaceService } from 'src/app/services/race.service';
import { Observable } from 'rxjs';
import { Poney } from 'src/app/models/poney';
import { Race } from 'src/app/models/race';
import { RaceEntityService } from 'src/app/services/race-entity-service';
import { PoneyEntityService } from 'src/app/services/poney-entity.service';

@Component({
  selector: 'arl-race-create',
  templateUrl: './race-create.component.html',
  styleUrls: ['./race-create.component.scss']
})
export class RaceCreateComponent implements OnInit {

  ponies$: Observable<Poney[]>
  race: Race = {
    name: '',
    poneyIds: []
  }

  constructor(
    private raceService: RaceService,
    private store: Store<State>,
    private raceEntityService: RaceEntityService,
    private poneyEntityService: PoneyEntityService
  ) { }

  ngOnInit() {
    this.ponies$ = this.poneyEntityService.entities$
  }

  handleSubmit() {
    // this.raceService.saveRace(this.race)
    this.raceEntityService.add(this.race)
  }

}
