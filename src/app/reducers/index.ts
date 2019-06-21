import { Race } from 'src/app/models/race';
import { Poney } from 'src/app/models/poney';
import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { poniesReducer } from './ponies.reducer';
import { racesReducer } from './races.reducer';

export interface State {
  ponies: Poney[]
  races: Race[]
}

export const reducers: ActionReducerMap<State> = {
  ponies: poniesReducer as ActionReducer<Poney[]>,
  races: racesReducer as ActionReducer<Race[]>
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
