import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { footerComponent } from './footer/footer.component';
import { AboutUSComponent } from './about-us/about-us.component';
import { OurservicesComponent } from './Components/ourservices/ourservices.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { InquiryPageComponent } from './Inquiry-Page/Inquiry-Page.component';

import { RouterModule } from "@angular/router";
import { BookingAppointmentComponent } from './booking-appointment/booking-appointment.component';


@NgModule({
  declarations: [
    AppComponent,
    footerComponent,
    AboutUSComponent,
    OurservicesComponent,
    BsNavbarComponent,
    HomeComponent,
    InquiryPageComponent,
    HomeComponent,
    BookingAppointmentComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,

    RouterModule.forRoot([
      {path: '', component:HomeComponent},
      {path: 'Services', component:OurservicesComponent},
      {path: 'About-us', component:AboutUSComponent},
      {path: 'Inquiry', component:InquiryPageComponent},
      {path:'Booking-Appointment',component:BookingAppointmentComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
