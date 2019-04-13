import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



export interface TestData {
  Name: string;
  City: string;
}

export interface requestData{
  startDate:string;
  endDate:string;
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})


export class DataServiceService {

  dataUrl = 'http://127.0.0.1:5000/hello';
  requestUrl = 'http://127.0.0.1:5000/recieve'

  

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<TestData>(this.dataUrl);
  }

  sendRequestData (rd: requestData): Observable<requestData> {
    console.log(rd);
    var d = JSON.stringify(rd)
    console.log(d);
    return this.http.post<requestData>(this.requestUrl, d, httpOptions);
  }


  

  
}
