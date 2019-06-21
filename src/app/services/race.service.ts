import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Race } from 'src/app/models/race';
import { Poney } from './../models/poney';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

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

  saveRace(race: Race): Observable<Race> {
    return this.http.post<Race>(`${environment.apiUrl}/races`, race).pipe(tap(race => {
      this.router.navigate(['/race', race.id])
    }))
  }

  savePoney(poney: Poney): Observable<Poney> {
    return this.http.post<Poney>(`${environment.apiUrl}/ponies`, poney).pipe(tap(poney => {
      this.router.navigateByUrl('/race-create')
    }))
  }

  isPoneyNameAvailable(name: string): Observable<boolean> {
    return this.http.get<Poney[]>(`${environment.apiUrl}/ponies`, {
      params: {
        name
      }
    }).pipe(map(ponies => !ponies.length))
  }

  constructor(private http: HttpClient, private router: Router) { }
}
