import { Component, OnInit,Input } from '@angular/core';
import { DataServiceService } from '../data-service.service';


@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  @Input() numberMeasure
  stats:JSON;
  Min = [];
  Max = [];
  PSdev = [];
  Mean = [];
  Median = [];
  count = [];
  repetition = [];


  constructor(private service:DataServiceService) { 
    this.stats=service.mainMeasureData();
    console.log(this.stats);
  }

  public barChartOptions = {
    scales : {
      yAxes: [{
         ticks: {
            beginAtZero: true,
          }
      }]
    },
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['NoAckL', 'NoAckM', 'NoAckH', 'AckL', 'AckM', 'AckH', 'RedL','RedM','RedH'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [];

  ngOnInit() {
    if(this.numberMeasure=="2"){
    for(let data in this.stats['stats']){
      this.Max.push(this.stats['stats'][data]["max"]);
      this.Min.push(this.stats['stats'][data]["min"]);
      this.PSdev.push(this.stats['stats'][data]["pstdev"]);
      this.Mean.push(this.stats['stats'][data]["mean"]);
      this.Median.push(this.stats['stats'][data]["median"]);
    }
    this.barChartData.push({data: this.Max, label: 'Max'})
    this.barChartData.push({data: this.Min, label: 'Min'})
    this.barChartData.push({data: this.PSdev, label: 'Population Standard Deviation'})
    this.barChartData.push({data: this.Mean, label: 'Mean'})
    this.barChartData.push({data: this.Median, label: 'Mediane'})
    }

    if(this.numberMeasure=="1"){
      for(let data in this.stats['count']){
        this.count.push(this.stats['count'][data]['totalReceived'])
      }
      for(let data in this.stats['repetition']){
        if(this.stats['repetition'][data]!=0){
        this.repetition.push(this.stats['repetition'][data])
        }else{
          this.repetition.push(900);
        }
      }
      this.repetition[6]=2700;
      this.repetition[7]=2700;
      this.repetition[8]=2700;



      this.barChartData.push({data: this.count, label: 'Number of packets received'})
      this.barChartData.push({data: this.repetition, label: 'Number of packets sent'})



    }
  }

}
