import { TestBed } from '@angular/core/testing';

import { GallerySService } from './gallery-s.service';

describe('GallerySService', () => {
  let service: GallerySService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GallerySService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
