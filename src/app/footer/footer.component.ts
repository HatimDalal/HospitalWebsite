import { Component } from "@angular/core";

export interface PeriodicElement {
  ourservices: string;
  getintouch: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {ourservices: 'Patient Care', getintouch: '022-3456 3456'},
  {ourservices: 'Medical Services', getintouch: '022-4567 4567'},
  {ourservices: 'Surgical Services', getintouch: '022-7896 7896'},
  {ourservices: 'cancer Care', getintouch: ' HospitalWebsite@gmail.com'},
  {ourservices: 'OPD Services', getintouch: ' HospitalQuery@gmail.com'},
];

@Component({
  selector:'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class footerComponent{
  displayedColumns: string[] = ['ourservices','getintouch'];
  dataSource = ELEMENT_DATA;
}
