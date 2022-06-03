import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsNavbarComponent } from './bs-navbar.component';

describe('BsNavbarComponent', () => {
  let component: BsNavbarComponent;
  let fixture: ComponentFixture<BsNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('LogoImg', () => {
    expect(component.logosvg).toBeTrue;
  });
  it('Services', () => {
    expect(component).toBeTrue;
  });
  it('About-us', () => {
    expect(component).toBeTrue;
  });
  it('Booking-Appointment', () => {
    expect(component).toBeTrue;
  });
  it('All-Doctors', () => {
    expect(component).toBeTrue;
  });
});
