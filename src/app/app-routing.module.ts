import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataTableComponent } from './data-table/data-table.component';
import { BarchartComponent } from './barchart/barchart.component';
import { FormsRequestDataComponent } from './forms-request-data/forms-request-data.component';
import { TestDbdataComponent } from './test-dbdata/test-dbdata.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MainNavigationBarComponent } from './main-navigation-bar/main-navigation-bar.component';
import { CreateMeasureComponent } from './create-measure/create-measure.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

const routes: Routes = [
  {path: 'main-navigation', component:MainNavigationBarComponent},
  {path:'radar',component:RadarChartComponent},
  {path:'linechart', component:LineChartComponent},
  {path:'piechart', component:PieChartComponent},
  {path:'', component:LoginFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
