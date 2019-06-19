import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Race } from 'src/app/models/race';
import { Poney } from './../models/poney';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  private _ponies: Poney[] = []

  private _races: Race[] = []

  get ponies(): Observable<Poney[]> {
    return this.http.get<Poney[]>(`${environment.apiUrl}/ponies`)
  }

  get races(): Observable<Race[]> {
    return this.http.get<Race[]>(`${environment.apiUrl}/races`)
  }

  getRaceById(id: string): Observable<Race> {
    return this.races.pipe(
      map(races => races.find(race => race.id === id))
    )
  }

  constructor(private http: HttpClient) { }
}
