import { State } from './../../reducers/index';
import { Race } from './../../models/race';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'arl-race-list',
  templateUrl: './race-list.component.html',
  styleUrls: ['./race-list.component.scss']
})
export class RaceListComponent implements OnInit {

  races$: Observable<Race[]>

  ngOnInit() {
    this.races$ = this.store.pipe(select('races'))
  }

  constructor(private store: Store<State>) {}

}
