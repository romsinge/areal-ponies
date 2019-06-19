import { Poney } from './../../models/poney';
import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { PoneyComponent } from '../poney/poney.component';
import { Race } from '../../models/race';
import { UpperCasePipe } from '@angular/common';
import { RaceService } from 'src/app/services/race.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators'
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'arl-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {

  race$: Observable<Race>

  ponies: Poney[] = []
  sub: Subscription

  @ViewChildren('poneyChildren') poneyChildren: QueryList<PoneyComponent>

  handleWin(poney: Poney): void {
    console.log('WINNER : ', this.uppercasePipe.transform(poney.name))
    this.stopPonies()
  }

  constructor(
    private uppercasePipe: UpperCasePipe,
    private raceService: RaceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.ponies = this.raceService.ponies

    this.race$ = this.route.paramMap.pipe(map(params => this.raceService.getRaceById(params.get('id'))))
  }

  stopPonies() {
    this.poneyChildren.forEach(poney => {
      poney.stopRunning()
    })
  }

  ngOnDestroy(): void {
    this.stopPonies()
  }
}
