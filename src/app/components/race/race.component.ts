import { Poney } from './../../models/poney';
import { Component, OnInit, ViewChildren, QueryList, Input } from '@angular/core';
import { PoneyComponent } from '../poney/poney.component';
import { Race } from '../../models/race';
import { UpperCasePipe } from '@angular/common';
import { RaceService } from 'src/app/services/race.service';

@Component({
  selector: 'arl-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {

  @Input() race: Race

  ponies: Poney[] = []

  @ViewChildren('poneyChildren') poneyChildren: QueryList<PoneyComponent>

  handleWin(poney: Poney): void {
    console.log('WINNER : ', this.uppercasePipe.transform(poney.name))
    this.poneyChildren.forEach(poney => {
      poney.stopRunning()
    })
  }

  constructor(
    private uppercasePipe: UpperCasePipe,
    private raceService: RaceService  
  ) { }

  ngOnInit() {
    this.ponies = this.raceService.ponies
  }

}
