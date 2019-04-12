import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataTableComponent } from './data-table/data-table.component';
import { BarchartComponent } from './barchart/barchart.component';


const routes: Routes = [
  {path: 'barchart', component:BarchartComponent },
  {path: 'datatable', component:DataTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
