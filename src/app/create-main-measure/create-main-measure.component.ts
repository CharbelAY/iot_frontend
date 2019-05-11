import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-create-main-measure',
  templateUrl: './create-main-measure.component.html',
  styleUrls: ['./create-main-measure.component.css']
})
export class CreateMainMeasureComponent implements OnInit {

  
  MeasureName: string;
  startDate_Ack: string;
  endDate_Ack: string;
  startDate_NoAck: string;
  endDate_NoAck: string;
  startDate_Red: string;
  endDate_Red: string;
  creator: string;
  TypeOfMeasure: string;

  constructor(private service:DataServiceService) { 
  }

  ngOnInit() {
  }

  bufferValue = 30;
  color = 'primary';
  mode = 'determinate';
  value = 0;
  b = true;

  turnProgressOn(){
      var i = 10;
      while(i<90){
        this.value=i;
        i=i+10;
      }
    this.value=100;
  }

  turnProgressOf(){
    this.value=0;
  }


  cereateMeasure() : void {
    var cmr:mainmeasure = {
      startDate_Ack: this.startDate_Ack,
      endDate_Ack: this.endDate_Ack,
      startDate_NoAck: this.startDate_NoAck,
      endDate_NoAck: this.endDate_NoAck,
      startDate_Red: this.startDate_Red,
      endDate_Red: this.endDate_Red,
    }

    this.turnProgressOn();

   this.service.cereateMainMeasure(cmr);
  }

}

export class AutocompleteSimpleExample {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
}

