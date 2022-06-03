import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from './booking';

import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class BookingService {

   baseurl=[];
  

  constructor(private http: HttpClient) { }

	getAll():Observable<Booking[]> {

    let baseurl = 'http://localhost:3000/Appointment';
	  return this.http.get<Booking[]>(baseurl);
	}

  createdata(data:any):Observable<any>
  {
    //let bsurl = 'http://localhost:3000/Appointment';


    console.log(data,'createapi=>');
    let observable = this.http.post<any>("http://localhost:3000/Appointment",data);
   // return this.http.post<Booking[]>(`${this.bsurl}`, data);
    return observable;

  }

}


