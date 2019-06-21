import { State } from './../../reducers/index';
import { Store, select } from '@ngrx/store';
import { Poney } from './../../models/poney';
import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { PoneyComponent } from '../poney/poney.component';
import { Race } from '../../models/race';
import { UpperCasePipe } from '@angular/common';
import { RaceService } from 'src/app/services/race.service';
import { ActivatedRoute } from '@angular/router';
import { flatMap, map, tap } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Component({
  selector: 'arl-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {

  race$: Observable<Race>

  ponies$: Observable<Poney[]>

  @ViewChildren('poneyChildren') poneyChildren: QueryList<PoneyComponent>

  handleWin(poney: Poney): void {
    console.log('WINNER : ', this.uppercasePipe.transform(poney.name))
    this.stopPonies()
  }

  constructor(
    private uppercasePipe: UpperCasePipe,
    private raceService: RaceService,
    private route: ActivatedRoute,
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.ponies$ = this.store.pipe(select('ponies'))

    this.race$ = this.route.paramMap.pipe(
      flatMap(params => this.raceService.getRaceById(params.get('id')))
    )
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
