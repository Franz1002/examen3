import { TestBed } from '@angular/core/testing';

import { Quotesapi } from './quotesapi';

describe('Quotesapi', () => {
  let service: Quotesapi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Quotesapi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
