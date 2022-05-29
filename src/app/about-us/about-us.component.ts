import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUSComponent implements OnInit {

  image:string="assets/images/doctor4.svg";
  image1:string="assets/images/istockphoto.jpg";
  image2:string="assets/images/doctor3.jpg";
  image3:string="assets/images/doctor1.jpg";
  image4:string="assets/images/best-surgeons.jpg";
  image5:string="assets/images/doctors.svg";
  image6:string="assets/images/hospital-design.svg";

  constructor() { }

  ngOnInit(): void {
  }

}
