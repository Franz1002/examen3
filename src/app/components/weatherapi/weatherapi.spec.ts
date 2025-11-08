import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Weatherapi } from './weatherapi';

describe('Weatherapi', () => {
  let component: Weatherapi;
  let fixture: ComponentFixture<Weatherapi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Weatherapi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Weatherapi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
