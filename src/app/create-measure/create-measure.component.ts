import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-create-measure',
  templateUrl: './create-measure.component.html',
  styleUrls: ['./create-measure.component.css']
})
export class CreateMeasureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export class AutocompleteSimpleExample {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
}
