import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inquiry } from './inquiry';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  apiUrl=[];

  constructor(private _http:HttpClient) { }
  // connect HospitalWebsite to backend



  getAll():Observable<Inquiry[]>{
    let apiUrl = 'http://localhost:3000/form';

    return this._http.get<Inquiry[]>(apiUrl);
  }

  createdata(data:any):Observable<any>
  {
    let apiUrl = 'http://localhost:3000/form';


    console.log(data,'createapi=>');
    return this._http.post(`${this.apiUrl}`, data);
    // let observable = this.http.post<any>("http://localhost:8080/createpatient",patient);
    // return observable;

  }



  // //get all data
  // getAllData():Observable<any>
  // {
  //   return this._http.get(`${this.apiUrl}`);
  // }


}
function apiUrl<T>(apiUrl: any): Observable<Inquiry[]> {
  throw new Error('Function not implemented.');
}

