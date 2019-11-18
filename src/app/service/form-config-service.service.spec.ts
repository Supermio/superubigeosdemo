import { TestBed } from '@angular/core/testing';

import { FormConfigServiceService } from './form-config-service.service';

describe('FormConfigServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormConfigServiceService = TestBed.get(FormConfigServiceService);
    expect(service).toBeTruthy();
  });
});
