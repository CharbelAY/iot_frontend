import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { DataServiceService } from '../data-service.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})

export class RadarChartComponent implements OnInit {
  public radarChartOptions: ChartOptions = {
    responsive: true,
  };

  list1: number[] = [];
  list2: number[] = [];
  name1: string;
  name2: string;

  public radarChartLabels: Label[] = ['0','1', '2', '3', '4','5','6','7','8'];

  public radarChartData: ChartDataSets[] = [
    { data: this.list1, label: this.name1},
    { data: this.list2, label: this.name2 }
  ];
  public radarChartType: ChartType = 'radar';
  subscription: Subscription;
  donnee:Object;

  constructor(private service:DataServiceService) { 
    this.Radar1 = service.getRadar("1/stat");
    this.name1=this.Radar1['saveName']
    this.Radar1=this.Radar1['dict'];
    this.Radar2 = service.getRadar("2/stat");
    this.name2=this.Radar2['saveName']
    this.Radar2 = this.Radar2['dict'];
    console.log(this.Radar1);

for (let key in this.Radar1) {
  this.list1.push(this.Radar1[key]);
}
console.log("list 1 ");
console.log(this.list1);

for (let key in this.Radar2) {
  this.list2.push(this.Radar2[key]);
}
    
  }

  Radar1:Object;
  Radar2:Object;
  ngOnInit() {
  }

  ngOnDestroy() {
    // // unsubscribe to ensure no memory leaks
    // this.subscription.unsubscribe();
}

}
