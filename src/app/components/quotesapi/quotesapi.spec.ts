import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quotesapi } from './quotesapi';

describe('Quotesapi', () => {
  let component: Quotesapi;
  let fixture: ComponentFixture<Quotesapi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Quotesapi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Quotesapi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
