import { Component } from '@angular/core';
import { DataServiceService } from './data-service.service';


export interface TestData {
  Name: string;
  City: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private service:DataServiceService) {}
     ngOnInit() {
       this.showConfig();
   }
  title = 'IoTPlatform';

td : TestData

  showConfig() {
    this.service.getData()
      .subscribe((data: TestData) => this.td = {
          Name: data['Name'],
          City:  data['City']
      });
  }


  
}
