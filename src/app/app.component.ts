import { State } from './reducers/index';
import { Store } from '@ngrx/store';
import { Component, ViewEncapsulation } from '@angular/core';
import { InitRaces } from './actions/races.actions';
import { InitPonies } from './actions/ponies.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title: string = 'Areal'

  ngOnInit() {
    this.store.dispatch(new InitRaces())
    this.store.dispatch(new InitPonies())
  }

  constructor(private store: Store<State>) {}
}
