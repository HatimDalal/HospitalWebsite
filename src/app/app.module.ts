import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { headerComponent } from './header/header.component';
import { footerComponent } from './footer/footer.component';
import { AboutUSComponent } from './about-us/about-us.component';
import { OurservicesComponent } from './Components/ourservices/ourservices.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { InquiryPageComponent } from './Inquiry-Page/Inquiry-Page.component';

import { RouterModule } from "@angular/router";


@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    footerComponent,
    AboutUSComponent,
    OurservicesComponent,
    BsNavbarComponent,
<<<<<<< HEAD
    HomeComponent,
    InquiryPageComponent
=======
    HomeComponent
>>>>>>> b41386bc496f162472c8dcc658031e0eef3adc32
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule

    RouterModule.forRoot([
      {path: '', component:HomeComponent},
      {path: 'Services', component:OurservicesComponent},
      {path: 'About-us', component:AboutUSComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
