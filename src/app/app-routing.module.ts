import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutUSComponent } from './about-us/about-us.component';
import { OurservicesComponent } from './Components/ourservices/ourservices.component';

const routes: Routes = [
  {path:"project-about-us",component:AboutUSComponent},
  {path:'Ourservices', component: OurservicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }






