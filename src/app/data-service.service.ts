import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';



export interface TestData {
  Message: string;
  
}

export interface requestData{
  startDate:string;
  endDate:string;
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})


export class DataServiceService {

  dataUrl = 'http://127.0.0.1:5000/send';
  requestUrl = 'http://127.0.0.1:5000/receive'
  loginUrl = 'http://127.0.0.1:5000/login'

  private subject = new Subject<any>();

  

    sendMessage(message: String) {
        this.subject.next({ text: message });
    }

    clearMessage() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<TestData>(this.dataUrl);
  }

  sendRequestData (rd: requestData): Observable<any> {
    console.log(rd)
    var d = JSON.stringify(rd)
    var s =  this.http.post<any>(this.requestUrl, d,httpOptions).subscribe(r=>{});
    console.log(s)
    return 
  }


  login (lf: loginform): Observable<any> {
    var d = JSON.stringify(lf)
    this.http.post<any>(this.loginUrl, d,httpOptions).subscribe((r:String)=>{
    console.log(r);
    console.log(typeof r);
    this.sendMessage(r);
    });
      return 
  }


  

  
}
