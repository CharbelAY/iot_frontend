import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { Color, BaseChartDirective } from 'ng2-charts';
import '../../../chartjs-chart-financial';

@Component({
  selector: 'app-candle-chart',
  templateUrl: './candle-chart.component.html',
  styleUrls: ['./candle-chart.component.css']
})
export class CandleChartComponent implements OnInit {
  barCount = 60;
  initialDateStr = '01 Apr 2017 00:00 Z';

  public financialChartData = [
    {
      label: 'CHRT - Chart.js Corporation',
      data: [{t:0,o:23,h:34,l:2,c:14},{t:1,o:45,h:34,l:2,c:14},{t:2,o:23,h:34,l:2,c:14}]
    },
  ];
  public financialChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
  };
  public financialChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public financialChartLegend = true;
  public financialChartType = 'candlestick';
  public financialChartPlugins = [];

  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  constructor() { }

  ngOnInit() {
  }

  randomNumber(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

}