import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { footerComponent } from './footer/footer.component';

import { FormsModule } from "@angular/forms";
import { OurservicesComponent } from './Components/ourservices/ourservices.component';

@NgModule({
  declarations: [
    AppComponent,
    footerComponent,
    OurservicesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
