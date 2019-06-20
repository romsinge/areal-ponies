import { Action } from '@ngrx/store';
import { Race } from '../models/race';

export enum RacesActionTypes {
  Add = '[Races] ADD',
  AddSuccess = '[Races] ADD SUCCESS',
  Init = '[Races] INIT',
  InitSuccess = '[Races] INIT SUCCESS'
}

export class AddRace implements Action {

  readonly type: string = RacesActionTypes.Add

  constructor(public payload: Race) {}

}

export class AddRaceSuccess implements Action {

  readonly type: string = RacesActionTypes.AddSuccess

  constructor(public payload: Race) {}

}

export class InitRaces implements Action {

  readonly type: string = RacesActionTypes.Init

}

export class InitRacesSuccess implements Action {

  readonly type: string = RacesActionTypes.InitSuccess

  constructor(public payload: Race[]) {}

}

export type RacesActions = AddRaceSuccess | InitRacesSuccess