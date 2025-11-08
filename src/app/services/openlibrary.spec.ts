import { TestBed } from '@angular/core/testing';

import { Openlibrary } from './openlibrary';

describe('Openlibrary', () => {
  let service: Openlibrary;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Openlibrary);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
