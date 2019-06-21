import { TestBed } from '@angular/core/testing';

import { PoneyEntityService } from './poney-entity.service';

describe('PoneyEntityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PoneyEntityService = TestBed.get(PoneyEntityService);
    expect(service).toBeTruthy();
  });
});
