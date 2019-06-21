import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentString'
})
export class PercentPipe implements PipeTransform {

  transform(value: number): string {
    return `${value}%`
  }

}
