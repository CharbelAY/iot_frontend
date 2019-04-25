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
  public radarChartLabels: Label[] = ['1', '5', '3', '2','6','8','4','7'];

  public radarChartData: ChartDataSets[] = [
    { data: [45, 10, 15, 10,5,5,2,8], label: 'Series A' },
    { data: [28, 25, 17, 11,2,5,2,10], label: 'Series B' }
  ];
  public radarChartType: ChartType = 'radar';

  constructor(private service:DataServiceService) { 
    this.subscription = this.service.getMessage().subscribe(message => { 
      this.donnee=message;
      console.log(this.donnee);
     });
  }

  subscription: Subscription;
  donnee:Object;

  ngOnInit() {
  }

}
