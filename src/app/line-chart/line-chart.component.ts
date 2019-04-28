import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import {DataServiceService} from '../data-service.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  packetlos1:Object;
  list1x: number[] = [];
  list1y: number[] = [];
  list2x: number[] = [];

  public lineChartData: ChartDataSets[] = [
    { data: this.list1x , label: 'Series A' },
    { data: this.list2x, label: 'Series B' },
  ];

  public lineChartLabels: Label[] = [];


  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    elements:{
      line:{
        steppedLine:'before',
        tension:0,
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  constructor(private service:DataServiceService) { }

  ngOnInit() {
    this.packetlos1 =this.service.getPacketLoss("1");
    this.packetlos1 = this.packetlos1["loss"];
    for (let key in this.packetlos1) {
      this.list1x.push(parseInt(this.packetlos1[key]));
    }

    this.packetlos1 =this.service.getPacketLoss("2");
    this.packetlos1 = this.packetlos1["loss"];
    for (let key in this.packetlos1) {
      this.list2x.push(parseInt(this.packetlos1[key]));
    }

    var i=1;
    for (let key in this.list1x) {
      this.lineChartLabels.push(i.toString());
      i=i+1;
    }
  }


}
