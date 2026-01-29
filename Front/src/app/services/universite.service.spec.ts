import { TestBed } from '@angular/core/testing';

import { universiteService } from './universite.service';

describe('universiteService', () => {
  let service:universiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(universiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
