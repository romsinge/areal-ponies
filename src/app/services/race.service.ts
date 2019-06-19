import { Race } from 'src/app/models/race';
import { Poney } from './../models/poney';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  private _ponies: Poney[] = []

  private _races: Race[] = []

  get ponies(): Poney[] {
    return this._ponies
  }

  get races(): Race[] {
    return this._races
  }

  getRaceById(id: string): Race {
    return this.races.find(race => race.id === id)
  }

  constructor() { }
}
