import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dogapi } from './dogapi';

describe('Dogapi', () => {
  let component: Dogapi;
  let fixture: ComponentFixture<Dogapi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dogapi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dogapi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
