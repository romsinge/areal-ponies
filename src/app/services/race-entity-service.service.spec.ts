import { TestBed } from '@angular/core/testing';

import { RaceEntityService } from './race-entity-service';

describe('RaceEntityServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RaceEntityService = TestBed.get(RaceEntityService);
    expect(service).toBeTruthy();
  });
});
