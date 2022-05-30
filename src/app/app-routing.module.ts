import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookingAppointmentComponent } from './booking-appointment/booking-appointment.component';
import { AboutUSComponent } from './about-us/about-us.component';
import { OurservicesComponent } from './Components/ourservices/ourservices.component';

const routes: Routes = [
  {path:"project-about-us",component:AboutUSComponent},
  {path:'Ourservices', component: OurservicesComponent},
  {path:'Booking-Appointment',component:BookingAppointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }






