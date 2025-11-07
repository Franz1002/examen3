import { TestBed } from '@angular/core/testing';

import { Freetogame } from './freetogame';

describe('Freetogame', () => {
  let service: Freetogame;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Freetogame);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
