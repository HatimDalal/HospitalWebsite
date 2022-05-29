import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ourservices',
  templateUrl: './ourservices.component.html',
  styleUrls: ['./ourservices.component.css']
})
export class OurservicesComponent implements OnInit {

  Image: string="assets/img/ICCU.svg";
  Image1: string="assets/img/ward.svg";
  Image2: string="assets/img/back.svg"

  constructor() { }

  ngOnInit(): void {
  }

}
