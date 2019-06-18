import { RaceService } from './../../services/race.service';
import { Race } from './../../models/race';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'arl-race-list',
  templateUrl: './race-list.component.html',
  styleUrls: ['./race-list.component.scss']
})
export class RaceListComponent implements OnInit {

  races: Race[] = []

  ngOnInit() {
    this.races = this.raceService.races
  }

  constructor(private raceService: RaceService) {}

}
