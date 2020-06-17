import { TestBed } from '@angular/core/testing';

import { ContactusValidationService } from './contactus-validation.service';

describe('ContactusValidationService', () => {
  let service: ContactusValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactusValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
