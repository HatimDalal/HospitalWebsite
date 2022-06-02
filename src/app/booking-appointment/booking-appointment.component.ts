import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Booking } from '../booking';
import { BookingService } from '../booking.service';


@Component({
  selector: 'app-booking-appointment',
  templateUrl: './booking-appointment.component.html',
  styleUrls: ['./booking-appointment.component.css']
})
export class BookingAppointmentComponent {
  bookingform!:FormGroup
  submitted = false;

  constructor (private book:BookingService,private FormBuilder:FormBuilder){ }

  Result:Booking[]=[];

  ngOnInit(){


    this.bookingform = this.FormBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      Number:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      Email:['',[Validators.required,Validators.email]],
      Age:['',[Validators.required,Validators.minLength(2),Validators.maxLength(2)]],
      BGroup:['',[Validators.required,Validators.minLength(3),Validators.maxLength(3)]],
      Concern:['',Validators.required]
    })
       this.book.getAll().subscribe((data:Booking[])=>{
         for(var i=0;i<data.length;i++){
           let ba:Booking={
             firstname:data[i].firstname,
             lastname:data[i].lastname,
             Phone:data[i].Phone,
             Email:data[i].Email,
             Age: data[i].Age,
             Bgroup:data[i].Bgroup,
             doctorname:data[i].doctorname,
             message:data[i].message,

           };
           this.Result.push(ba);
           console.log(this.Result);
         }
       });

  }

  onSubmit(){
    this.submitted = true

    if(this.bookingform.invalid){
      return
    }
    alert("Success")
  }



}
