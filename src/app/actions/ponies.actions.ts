import { Poney } from 'src/app/models/poney';
import { Action } from '@ngrx/store';

export enum PoniesActionTypes {
  Init = '[Ponies] INIT',
  InitSuccess = '[Ponies] INIT SUCCESS',
  Add = '[Ponies] ADD',
  AddSuccess = '[Ponies] ADD SUCCESS'
} 

export class InitPonies implements Action {

  readonly type: string = PoniesActionTypes.Init

}

export class InitPoniesSuccess implements Action {

  readonly type: string = PoniesActionTypes.InitSuccess

  constructor(public payload: Poney[]) {}

}

export class AddPoney implements Action {

  readonly type: string = PoniesActionTypes.Add
  
  constructor(public payload: Poney) {}

}

export class AddPoneySuccess implements Action {

  readonly type: string = PoniesActionTypes.AddSuccess

  constructor(public payload: Poney) {}

}

export type PoniesActions = InitPoniesSuccess | AddPoneySuccess