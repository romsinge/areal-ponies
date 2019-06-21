import { RaceEntityService } from './../../services/race-entity-service';
import { Race } from './../../models/race';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'arl-race-list',
  templateUrl: './race-list.component.html',
  styleUrls: ['./race-list.component.scss']
})
export class RaceListComponent implements OnInit {

  races$: Observable<Race[]>

  ngOnInit() {
    this.races$ = this.raceEntityService.entities$
  }

  constructor(private raceEntityService: RaceEntityService) {}

}
