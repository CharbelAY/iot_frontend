import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface TestData {
  Name: string;
  City: string;
}

@Injectable({
  providedIn: 'root'
})


export class DataServiceService {

  dataUrl = '../assets/test.json';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<TestData>(this.dataUrl);
  }

  
}
