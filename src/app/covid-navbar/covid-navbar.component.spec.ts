import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidNavbarComponent } from './covid-navbar.component';

describe('CovidNavbarComponent', () => {
  let component: CovidNavbarComponent;
  let fixture: ComponentFixture<CovidNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
