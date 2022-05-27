import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ourservices',
  templateUrl: './ourservices.component.html',
  styleUrls: ['./ourservices.component.css']
})
export class OurservicesComponent implements OnInit {

  Image: string="assets/img/ICCU.jpg";
  Image1: string="assets/img/ward.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
