import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Subscription } from 'rxjs';


export interface TestData {
  Message: String;
}



@Component({
  selector: 'app-test-dbdata',
  templateUrl: './test-dbdata.component.html',
  styleUrls: ['./test-dbdata.component.css']
})


export class TestDbdataComponent implements OnInit {
  subscription: Subscription;

  Collection:Object;

  collectionsAffichage: number[] = [];


  constructor(private service:DataServiceService) {
    this.subscription = this.service.getHistory().subscribe(message => { 
      this.Collection=message; 
      console.log(this.Collection);  
      for(let key in this.Collection){
        this.collectionsAffichage.push(this.Collection[key]);
      }   
     });

     this.service.getCollections();
   }

  ngOnInit() {
  }

  td : TestData


  save(){
    this.service.saveMeasure();
  }
}
