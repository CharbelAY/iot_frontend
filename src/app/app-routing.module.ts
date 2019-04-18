import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataTableComponent } from './data-table/data-table.component';
import { BarchartComponent } from './barchart/barchart.component';
import { FormsRequestDataComponent } from './forms-request-data/forms-request-data.component';
import { TestDbdataComponent } from './test-dbdata/test-dbdata.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';


const routes: Routes = [
  {path: 'barchart', component:BarchartComponent },
  {path: 'datatable', component:DashboardComponent},
  {path:'forms', component:RadarChartComponent},
  {path:'test-data', component:TestDbdataComponent},
  {path:'radar-chart', component:RadarChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
