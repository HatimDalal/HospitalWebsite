import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { Inquiry } from '../inquiry';


@Component({
  selector: 'app-ourservices',
  templateUrl: './Inquiry-Page.component.html',
  styleUrls: ['./Inquiry-Page.component.css']
})
export class InquiryPageComponent{
  inquiryform!:FormGroup
  submitted = false;

  constructor(private FormBuilder:FormBuilder, private service:ApiserviceService){}

Result:Inquiry[]=[];

  ngOnInit(){
    //validations
    this.inquiryform = this.FormBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      Number:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      Email:['',[Validators.required,Validators.email]],
      Query:['',Validators.required]
    })

    // this.service.getAll().subscribe((service:Inquiry[])=>{
    //   for(var i=0;i<service.length;i++){
    //     let se:Inquiry={
    //       fname:service[i].fname,
    //       lname:service[i].lname,
    //       pnumber:service[i].pnumber,
    //       email:service[i].email,
    //       issue:service[i].issue
    //     };
    //     this.Result.push(se);
    //     console.log(this.Result);
    //   }
    // });

  }

  onSubmit() {
    this.submitted = true

    if(this.inquiryform.invalid){
      return
    }
    alert("Success")

    if(this.inquiryform.valid)
    {
      console.log(this.inquiryform.value);
      this.service.createdata(this.inquiryform.value);
      // ((res)=>{
      //   console.log(res, 'res==>');
      //   this.inquiryform.reset();
      // });
    }
    // else{
    //   console.log('all fields are required.');
    // }

  }

  // inquiryform = new FormGroup({
  //   'firstName' : new FormControl(''),
  //   'lastName' : new FormControl(''),
  //   'Number' : new FormControl(''),
  //   'Email' : new FormControl(''),
  //   'Query' : new FormControl('')
  // });

}
