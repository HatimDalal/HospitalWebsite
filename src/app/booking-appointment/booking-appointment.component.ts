import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-booking-appointment',
  templateUrl: './booking-appointment.component.html',
  styleUrls: ['./booking-appointment.component.css']
})
export class BookingAppointmentComponent {
  bookingform!:FormGroup
  submitted = false;

  constructor(private FormBuilder:FormBuilder){ }

  ngOnInit(){
    this.bookingform = this.FormBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      Number:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      Email:['',[Validators.required,Validators.email]],
      Age:['',[Validators.required,Validators.minLength(2),Validators.maxLength(2)]],
      BGroup:['',[Validators.required,Validators.minLength(3),Validators.maxLength(3)]],
      Query:['',Validators.required]
    })
  }

  onSubmit(){
    this.submitted = true

    if(this.bookingform.invalid){
      return
    }
    alert("Success")
  }



}
