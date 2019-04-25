import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-create-measure',
  templateUrl: './create-measure.component.html',
  styleUrls: ['./create-measure.component.css']
})

export class CreateMeasureComponent implements OnInit {

  
  MeasureName: string;
  startDate: string;
  endDate: string;
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
    var cmr:createmeasure = {
      MeasureName: this.MeasureName,
      startDate: this.startDate,
      endDate: this.endDate,
      creator: this.creator,
      TypeOfMeasure: this.TypeOfMeasure
    }

    this.turnProgressOn();

   this.service.cereateMeasure(cmr);
  }

}

export class AutocompleteSimpleExample {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
}
