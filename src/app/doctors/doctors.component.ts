import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  constructor() { }

  pdfLink:string="assets/output.pdf"
  pdfLogo:string="assets/images/pdfLogo.png"

  ngOnInit(): void {
  }

}
