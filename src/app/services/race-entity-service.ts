import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Race } from '../models/race';

@Injectable({
  providedIn: 'root'
})
export class RaceEntityService extends EntityCollectionServiceBase<Race> {

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Races', serviceElementsFactory)
  }
}
