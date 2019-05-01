import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';


export interface DataTable{
  fcnt: string;
  frequency:number;
  adr:string;
  data:string;
  time:string;
  devicename:string;
  lorasnr:string;
}


var ELEMENT_DATA: DataTable[] = [];

@Component({
  selector: 'app-data-table-affichage',
  templateUrl: './data-table-affichage.component.html',
  styleUrls: ['./data-table-affichage.component.css']
})
export class DataTableAffichageComponent implements OnInit {

  displayedColumns: string[] = ['fcnt', 'frequency', 'adr', 'data','time','time','devicename','lorasnr'];
  dataSource = ELEMENT_DATA;

  constructor(private service:DataServiceService) { 
    var dataContainer1 = service.getTableData("2");
      for (let key in dataContainer1) {
        ELEMENT_DATA.push({
          fcnt: dataContainer1[key]['fCnt'],
          frequency: dataContainer1[key]['txInfo']['frequency'], 
          adr:  dataContainer1[key]['adr'],
          data: dataContainer1[key]['data'],
          time:dataContainer1[key]['rxInfo'][0]['time'],
          devicename:dataContainer1[key]['deviceName'],
          lorasnr:dataContainer1[key]['rxInfo'][0]['loRaSNR']
        })
  }
  }

  ngOnInit() {
  }

}

