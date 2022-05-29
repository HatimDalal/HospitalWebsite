import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUSComponent implements OnInit {

  image1:string="assets/images/istockphoto.svg";
  image2:string="assets/images/best-surgeons.svg";

  constructor() { }

  ngOnInit(): void {
  }

}
