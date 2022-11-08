import { TestBed } from '@angular/core/testing';

import { SregService } from './sreg.service';

describe('SregService', () => {
  let service: SregService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SregService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});


