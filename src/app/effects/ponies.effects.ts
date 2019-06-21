import { EntityOp, EntityAction } from '@ngrx/data';
import { AddPoney, PoniesActionTypes, AddPoneySuccess, InitPonies, InitPoniesSuccess } from './../actions/ponies.actions';
import { RaceService } from 'src/app/services/race.service';
import { map, flatMap, tap } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

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

  @Effect({ dispatch: false })
  addPoneySuccess$ = this.actions$.pipe(
    ofType<EntityAction>(`[Ponies] ${EntityOp.SAVE_ADD_ONE_SUCCESS}`),
    tap((action) => {
      this.router.navigateByUrl('/race-create')
    })
  )

  constructor(private actions$: Actions, private raceService: RaceService, private router: Router) {}
}