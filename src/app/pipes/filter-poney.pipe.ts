import { Poney } from './../models/poney';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPoney'
})
export class FilterPoneyPipe implements PipeTransform {

  transform(ponies: Poney[] = [], poneyIds: string[]): Poney[] {
    return ponies ? ponies.filter(poney => poneyIds.includes(poney.id)) : []
  }

}
