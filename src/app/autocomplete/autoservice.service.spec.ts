import { TestBed } from '@angular/core/testing';

import { AutoserviceService } from './autoservice.service';

describe('AutoserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutoserviceService = TestBed.get(AutoserviceService);
    expect(service).toBeTruthy();
  });
});
