import { TestBed } from '@angular/core/testing';

import { StoredtokenService } from './storedtoken.service';

describe('StoredtokenService', () => {
  let service: StoredtokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoredtokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
