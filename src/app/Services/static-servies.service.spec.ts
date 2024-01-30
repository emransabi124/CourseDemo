import { TestBed } from '@angular/core/testing';

import { StaticServiesService } from './static-servies.service';

describe('StaticServiesService', () => {
  let service: StaticServiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaticServiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
