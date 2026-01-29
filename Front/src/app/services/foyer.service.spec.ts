import { TestBed } from '@angular/core/testing';

import { foyerService } from './foyer.service';

describe('foyerService', () => {
  let service: foyerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(foyerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
