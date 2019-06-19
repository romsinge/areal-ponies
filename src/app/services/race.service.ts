import { Race } from 'src/app/models/race';
import { Poney } from './../models/poney';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  private _ponies: Poney[] = [
    new Poney("0", "Romain", "http://ponyracer.ninja-squad.com/assets/images/pony-green-running.gif"),
    new Poney("1", "Jean-Marc", "http://ponyracer.ninja-squad.com/assets/images/pony-blue-running.gif"),
    new Poney("2", "Julien", "http://ponyracer.ninja-squad.com/assets/images/pony-purple-running.gif")
  ]

  private _races: Race[] = [
    {
      "id": "0",
      "name": "Thädinge",
      "poneyIds": ["0", "1"]
    },
    {
      "id": "1",
      "name": "Béning",
      "poneyIds": ["1", "2"]
    }
  ]

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
