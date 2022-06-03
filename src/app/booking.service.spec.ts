import { async, ComponentFixture ,TestBed } from '@angular/core/testing';

import { BookingService } from './booking.service';

describe('BookingService', () => {
  let component: BookingService;
  let fixture: ComponentFixture<BookingService>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ BookingService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
});
