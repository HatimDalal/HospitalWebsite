import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurservicesComponent } from './Components/ourservices/ourservices.component';


const routes: Routes = [
  {path:'Ourservices', component: OurservicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }






