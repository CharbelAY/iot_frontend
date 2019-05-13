import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { DataServiceService } from '../data-service.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-main-measure-dashboard',
  templateUrl: './main-measure-dashboard.component.html',
  styleUrls: ['./main-measure-dashboard.component.css']
})

  export class MainMeasureDashboardComponent {

    subscription: Subscription;
  
    Collection:Object;
  
    collectionsAffichage: number[] = [];
    /** Based on the screen size, switch from standard to one column per row */
    cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map(({ matches }) => {
        // if (matches) {
        //   return [
        //     { title: 'Packet', cols: 1, rows: 1,num:1 },
        //     { title: 'Other Stuff', cols: 1, rows: 1,num:2 },
        //     { title: 'Something Else', cols: 1, rows: 1 },
        //     { title: 'More', cols: 1, rows: 1 }
        //   ];
        // }
  
        return [
          { title: 'Packet', cols: 2, rows: 2,num:1 },
          { title: 'Main Measures Results', cols: 2, rows: 2 ,num:2},

        ];
      })
    );
  
  
    constructor(private breakpointObserver: BreakpointObserver,private service:DataServiceService) {
      this.subscription = this.service.getHistory().subscribe(message => { 
        this.Collection=message; 
        console.log(this.Collection);  
        for(let key in this.Collection){
          this.collectionsAffichage.push(this.Collection[key]);
        }   
       });
  
       this.service.getCollections();
     }
  
    save(){
      this.service.saveMeasure();
    }
  }
