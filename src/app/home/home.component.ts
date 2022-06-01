import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  banner1:string="assets/images/Home/banner1.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
