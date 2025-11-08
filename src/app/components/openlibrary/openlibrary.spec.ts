import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OpenLibrary } from './openlibrary';

describe('OpenLibrary', () => {
  let component: OpenLibrary;
  let fixture: ComponentFixture<OpenLibrary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenLibrary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenLibrary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
