import { Race } from './../models/race';
import { RacesActions, RacesActionTypes } from '../actions/races.actions';

let initialState = [
  {
    "id": "0",
    "name": "Thädinge",
    "poneyIds": [
      "0",
      "1"
    ]
  },
  {
    "id": "1",
    "name": "Béning",
    "poneyIds": [
      "1",
      "2"
    ]
  }
]

export const racesReducer = (state: Race[] = initialState, action: RacesActions) => {

  switch(action.type) {
    case RacesActionTypes.AddSuccess:
      return [...state, action.payload]
    case RacesActionTypes.InitSuccess:
      return action.payload
    default:
      return state
  }

}