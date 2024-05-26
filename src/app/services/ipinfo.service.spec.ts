import { TestBed } from '@angular/core/testing';

import { IPinfoService } from './ipinfo.service';

describe('IPinfoService', () => {
  let service: IPinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IPinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
