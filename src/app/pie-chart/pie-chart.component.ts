import { Component, OnInit ,Input} from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import {DataServiceService} from '../data-service.service';
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  @Input() numberMeasure
  s:string;
  packetlos:object;
  pourcentage:number;
  

  public pieChartLabels: Label[] = [['Packet Loss'], ['Transmitted']];
  public pieChartData: number[]=[];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];


  constructor(private service:DataServiceService) { 
  }

  ngOnInit() {
    this.s=this.numberMeasure;
    if(this.s=="1"){
      this.packetlos =this.service.getPacketLoss("1");
      this.pourcentage=this.packetlos["pourcentage"];
      this.pieChartData.push(this.pourcentage);
      this.pieChartData.push(100-this.pourcentage);

    }
    if(this.s=="2"){
      this.packetlos=this.service.getPacketLoss("2");
      this.pourcentage=this.packetlos["pourcentage"];
      this.pieChartData.push(this.pourcentage);
      this.pieChartData.push(100-this.pourcentage);
    }

  }


}
