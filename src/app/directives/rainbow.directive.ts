import { Poney } from './../models/poney';
import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[arlRainbow]'
})
export class RainbowDirective {

  @Input('arlRainbow') color: string = "white";
  @Input() isColored: boolean = false
  @Input() poney : Poney
  timeoutId: any

  constructor(private el: ElementRef) {
    console.log('DIRECTIVE RAINBOW')
  }

  ngOnInit() {
    if (this.isColored) {
      this.el.nativeElement.style.backgroundColor = this.color
    }
  }

  @HostListener('dblclick')
  handleDblclick(): void {
    this.poney.distance += 10

    let runningImg = this.poney.img.replace('rainbow', 'running')
    let rainbowImg = this.poney.img.replace('running', 'rainbow')

    clearTimeout(this.timeoutId)

    this.poney.img = rainbowImg

    this.timeoutId = setTimeout(() => {
      this.poney.img = runningImg
    }, 1000)
  }
  
}
