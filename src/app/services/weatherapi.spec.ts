import { TestBed } from '@angular/core/testing';

import { Weatherapi } from './weatherapi';

describe('Weatherapi', () => {
  let service: Weatherapi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Weatherapi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
