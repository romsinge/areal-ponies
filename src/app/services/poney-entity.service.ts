import { Poney } from './../models/poney';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoneyEntityService extends EntityCollectionServiceBase<Poney> {

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Ponies', serviceElementsFactory)
  }
}
