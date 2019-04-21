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

const routes: Routes = [
  {path: 'create-measure', component:CreateMeasureComponent, canActivate:[LoginFormComponent]},
  {path: 'main-navigation', component:MainNavigationBarComponent,canActivate:[LoginFormComponent] },
  {path: 'barchart', component:BarchartComponent, canActivate:[LoginFormComponent]},
  {path: 'dashboard', component:DashboardComponent, canActivate:[LoginFormComponent]},
  {path:'forms', component:RadarChartComponent, canActivate:[LoginFormComponent]},
  {path:'test-data', component:TestDbdataComponent, canActivate:[LoginFormComponent]},
  {path:'radar-chart', component:RadarChartComponent, canActivate:[LoginFormComponent]},
  {path:'', component:LoginFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
