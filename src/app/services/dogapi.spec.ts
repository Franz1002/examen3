import { TestBed } from '@angular/core/testing';

import { Dogapi } from './dogapi';

describe('Dogapi', () => {
  let service: Dogapi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Dogapi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
