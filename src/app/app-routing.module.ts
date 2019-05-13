import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { HistoryCardsViewComponent } from './history-cards-view/history-cards-view.component';
import {DataTableAffichageComponent} from './data-table-affichage/data-table-affichage.component';
import { CandleChartComponent } from './candle-chart/candle-chart.component';
import { NumberOfPacketsComponent } from './number-of-packets/number-of-packets.component';
import { CreateMainMeasureComponent } from './create-main-measure/create-main-measure.component';
import { MainMeasureDashboardComponent } from './main-measure-dashboard/main-measure-dashboard.component';

const routes: Routes = [
  {path: 'History', component:HistoryCardsViewComponent},
  {path: 'main-navigation', component:MainNavigationBarComponent,canActivate: [LoginFormComponent]},
  {path:'radar',component:RadarChartComponent},
  {path:'linechart', component:LineChartComponent},
  {path:'piechart', component:PieChartComponent},
  {path:'test',component:TestDbdataComponent},
  {path:'table',component:DataTableAffichageComponent},
  {path:'candleChart',component:CandleChartComponent},
  {path:'numberofpackets',component:NumberOfPacketsComponent},
  {path:'create-main-measure',component:CreateMainMeasureComponent},
  {path:'main-measure-dashboard',component:MainMeasureDashboardComponent},
  {path:'', component:LoginFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
