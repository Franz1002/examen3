import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Freetogame } from './freetogame';
  
describe('Freetogame', () => {
  let component: Freetogame;
  let fixture: ComponentFixture<Freetogame>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Freetogame]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Freetogame);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
