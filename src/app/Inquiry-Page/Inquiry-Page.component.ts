import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-ourservices',
  templateUrl: './Inquiry-Page.component.html',
  styleUrls: ['./Inquiry-Page.component.css']
})
export class InquiryPageComponent{
  inquiryform!:FormGroup
  submitted = false;

  constructor(private FormBuilder:FormBuilder){}

  ngOnInit(){
    //validations
    this.inquiryform = this.FormBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      Number:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      Email:['',[Validators.required,Validators.email]],
      Query:['',Validators.required]
    })
  }

  onSubmit() {
    this.submitted = true

    if(this.inquiryform.invalid){
      return
    }
    alert("Success")
  }
}
