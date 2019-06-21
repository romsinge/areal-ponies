import { State } from './index';
import { createSelector } from '@ngrx/store'

export const isPoneyNameAvailable = createSelector(
  (state: State) => state.ponies,
  (ponies, name) => {
    return !ponies.find(poney => poney.name === name)
  }
)