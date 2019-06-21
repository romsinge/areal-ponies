import { PoniesActionTypes, PoniesActions } from './../actions/ponies.actions';
import { Poney } from './../models/poney';

export const poniesReducer = (state: Poney[], action: PoniesActions) => {

  switch(action.type) {
    case PoniesActionTypes.AddSuccess:
      return [...state, action.payload]
    case PoniesActionTypes.InitSuccess:
      return action.payload
    default:
      return state
  }

}