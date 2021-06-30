import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({ providedIn: 'root' })
export class MainService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

  getBootcamps(){
    return this.http.get('https://arima-nodejs-api.herokuapp.com/api/v1/bootcamps')
  }

}
