import { TestBed } from '@angular/core/testing';

import { PreferenceColorService } from './preference.service';

describe('DarkModeService', () => {
  let service: PreferenceColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreferenceColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
