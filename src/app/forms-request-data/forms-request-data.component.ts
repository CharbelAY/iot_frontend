import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';


export interface requestData{
  startDate:string;
  endDate:string;
}

@Component({
  selector: 'app-forms-request-data',
  templateUrl: './forms-request-data.component.html',
  styleUrls: ['./forms-request-data.component.css']
})
export class FormsRequestDataComponent implements OnInit {


startDate:string;
endDate:string;
  constructor(private service:DataServiceService) { 
  }

  ngOnInit() {
  }

  sendData(){
    var rd:requestData = { 
      startDate:this.startDate,
      endDate:this.endDate
   } 
    this.service.sendRequestData(rd);
  }

}
