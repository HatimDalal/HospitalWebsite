import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUSComponent implements OnInit {

  image:string="assets/images/doctor4.svg";
  image1:string="assets/images/doctor2.jpg";
  image2:string="assets/images/doctor3.jpg";
  image3:string="assets/images/doctor1.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
