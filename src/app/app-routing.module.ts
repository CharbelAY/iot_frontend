import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataTableComponent } from './data-table/data-table.component';
import { BarchartComponent } from './barchart/barchart.component';
import { FormsRequestDataComponent } from './forms-request-data/forms-request-data.component';
import { TestDbdataComponent } from './test-dbdata/test-dbdata.component';


const routes: Routes = [
  {path: 'barchart', component:BarchartComponent },
  {path: 'datatable', component:DataTableComponent},
  {path:'forms', component:FormsRequestDataComponent},
  {path:'test-data', component:TestDbdataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
