import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainComponente } from './main-componente';

describe('MainComponente', () => {
  let component: MainComponente;
  let fixture: ComponentFixture<MainComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainComponente],
    }).compileComponents();

    fixture = TestBed.createComponent(MainComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
