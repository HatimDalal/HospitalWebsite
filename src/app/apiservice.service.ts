import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }
  // connect HospitalWebsite to backend

  apiUrl = 'http://localhost:3000/form';

  // //get all data
  // getAllData():Observable<any>
  // {
  //   return this._http.get(`${this.apiUrl}`);
  // }

  //Create Inquiry
  createData(data:any):Observable<any>
  {
    console.log(data, 'createapi =>');
    return this._http.post(`${this.apiUrl}`,data,{headers:{"Access-Control-Allow-Origin":"*"}});
  }

}
