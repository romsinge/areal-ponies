import { Component, OnInit } from '@angular/core';
import { RaceService } from 'src/app/services/race.service';
import { Observable } from 'rxjs';
import { Poney } from 'src/app/models/poney';
import { Race } from 'src/app/models/race';

@Component({
  selector: 'arl-race-create',
  templateUrl: './race-create.component.html',
  styleUrls: ['./race-create.component.scss']
})
export class RaceCreateComponent implements OnInit {

  ponies$: Observable<Poney[]>
  race: Race = {
    name: '',
    poneyIds: []
  }

  constructor(private raceService: RaceService) { }

  ngOnInit() {
    this.ponies$ = this.raceService.ponies
  }

  handleSubmit() {
    this.raceService.saveRace(this.race)
  }

}
