import { TestBed } from '@angular/core/testing';

import { DevextremService } from './devextrem.service';

describe('DevextremService', () => {
  let service: DevextremService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevextremService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
