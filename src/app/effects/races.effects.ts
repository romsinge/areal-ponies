import { AddRace, AddRaceSuccess, InitRaces, InitRacesSuccess } from './../actions/races.actions';
import { RaceService } from 'src/app/services/race.service';
import { map, flatMap } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { RacesActionTypes } from '../actions/races.actions';

@Injectable()
export class RacesEffects {

  @Effect()
  addRace$ = this.actions$.pipe(
    ofType<AddRace>(RacesActionTypes.Add),
    flatMap(action => {
      return this.raceService.saveRace(action.payload).pipe(map(race => {
        return new AddRaceSuccess(race)
      }))
    })
  )
  
  @Effect()
  initRaces$ = this.actions$.pipe(
    ofType<InitRaces>(RacesActionTypes.Init),
    flatMap(() => {
      return this.raceService.races.pipe(map(races => {
        return new InitRacesSuccess(races)
      }))
    })
  )

  constructor(private actions$: Actions, private raceService: RaceService) {}
}