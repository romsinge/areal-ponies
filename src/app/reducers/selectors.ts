import { State } from './index';
import { createSelector } from '@ngrx/store'

export const isPoneyNameAvailable = createSelector(
  (state: any) => state.entityCache.Ponies.entities,
  (ponies, name) => {
    let isAvailable = true

    for (let key in ponies) {
      if (ponies[key].name === name) {
        isAvailable = false
      }
    }

    return isAvailable
  }
)