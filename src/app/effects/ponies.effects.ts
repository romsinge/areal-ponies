import { AddPoney, PoniesActionTypes, AddPoneySuccess, InitPonies, InitPoniesSuccess } from './../actions/ponies.actions';
import { RaceService } from 'src/app/services/race.service';
import { map, flatMap } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';

@Injectable()
export class PoniesEffects {

  @Effect()
  addPoney$ = this.actions$.pipe(
    ofType<AddPoney>(PoniesActionTypes.Add),
    flatMap(action => {
      return this.raceService.savePoney(action.payload).pipe(map(poney => {
        return new AddPoneySuccess(poney)
      }))
    })
  )
  
  @Effect()
  initPonies$ = this.actions$.pipe(
    ofType<InitPonies>(PoniesActionTypes.Init),
    flatMap(() => {
      return this.raceService.ponies.pipe(map(ponies => {
        return new InitPoniesSuccess(ponies)
      }))
    })
  )

  constructor(private actions$: Actions, private raceService: RaceService) {}
}