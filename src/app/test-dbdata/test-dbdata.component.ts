import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

export interface TestData {
  Message: String;
}

@Component({
  selector: 'app-test-dbdata',
  templateUrl: './test-dbdata.component.html',
  styleUrls: ['./test-dbdata.component.css']
})
export class TestDbdataComponent implements OnInit {

  constructor(private service:DataServiceService) { }

  ngOnInit() {
    this.showConfig();
  }

  td : TestData

  showConfig() {
    this.service.getData()
      .subscribe((data: TestData) => this.td = {
          Message: data['Message'],
      });
}
}
