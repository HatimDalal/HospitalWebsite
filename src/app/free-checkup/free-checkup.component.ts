import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-free-checkup',
  templateUrl: './free-checkup.component.html',
  styleUrls: ['./free-checkup.component.css']
})
export class FreeCheckupComponent implements OnInit {
  // bookingform!:FormGroup
  // submitted = false;

  

  constructor(private FormBuilder:FormBuilder) { }

  ngOnInit(): void {
  //   this.bookingform = this.FormBuilder.group({
  //     firstName:['',Validators.required],
  //     lastName:['',Validators.required],
  //     Number:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
  //     Email:['',[Validators.required,Validators.email]],
  //     Age:['',[Validators.required,Validators.minLength(2),Validators.maxLength(2)]],
  //     BGroup:['',[Validators.required,Validators.minLength(3),Validators.maxLength(3)]],
  //     Concern:['',Validators.required]
  //   })

    
    
   }

  onClick(){
    // const party = require("party-js");
    // party.confetti(this);
  }

  // onSubmit(){
  //   this.submitted = true

  //   if(this.bookingform.invalid){
  //     return
  //   }
  //   alert("Success")
  // }
}

