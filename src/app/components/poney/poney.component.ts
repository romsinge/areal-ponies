import { Poney } from './../../models/poney';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'arl-poney',
  templateUrl: './poney.component.html',
  styleUrls: ['./poney.component.scss']
})
export class PoneyComponent {

  @Input() poney : Poney
  @Output() win: EventEmitter<Poney> = new EventEmitter()
  intervalId: any

  constructor() { }

  ngOnInit(): void {
    this.run()
  }

  handleClick(): void {
    console.log("CLICK ON : ", this.poney.name)
  }

  run(): void {
    this.intervalId = setInterval(() => {
      this.poney.distance += Math.floor(Math.random() * 10) + 1

      if (this.poney.distance >= 90) {
        this.poney.distance = 90
        this.win.emit(this.poney)
      }
    }, 1000)
  }

  stopRunning(): void {
    clearInterval(this.intervalId)
  }

}
