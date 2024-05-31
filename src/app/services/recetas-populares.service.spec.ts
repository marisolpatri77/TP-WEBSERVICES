import { TestBed } from '@angular/core/testing';

import { RecetasPopularesService } from './recetas-populares.service';

describe('RecetasPopularesService', () => {
  let service: RecetasPopularesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecetasPopularesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
