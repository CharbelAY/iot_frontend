import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-history-cards-view',
  templateUrl: './history-cards-view.component.html',
  styleUrls: ['./history-cards-view.component.css']
})
export class HistoryCardsViewComponent implements OnInit {
  list:number[]=[1,2,3,4];

  subscription: Subscription;

  History:Object;

  HistoryAffichage: number[] = [];


  constructor(private service:DataServiceService) {
    this.subscription = this.service.getHistory().subscribe(message => { 
      this.History=JSON.parse(message); 
      for(let key in this.History){
        this.HistoryAffichage.push(this.History[key]);
      }  
     });

     this.service.getCollections();
   }

  ngOnInit() {
  }

  populate(i){
    this.service.populate(i);
  }

}
