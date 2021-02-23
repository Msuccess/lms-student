import { TestBed } from '@angular/core/testing';

import { ExtraClassService } from './extra-class.service';

describe('ExtraClassService', () => {
  let service: ExtraClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtraClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
