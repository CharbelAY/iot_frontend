import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule} from '@angular/forms';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ChartsModule} from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavigationBarComponent } from './main-navigation-bar/main-navigation-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';
import { DataTableComponent } from './data-table/data-table.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {BarchartComponent} from './barchart/barchart.component';
import { DataServiceService } from './data-service.service';
import { FormsRequestDataComponent } from './forms-request-data/forms-request-data.component';
import { TestDbdataComponent } from './test-dbdata/test-dbdata.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { CreateMeasureComponent } from './create-measure/create-measure.component';



@NgModule({
  declarations: [
    AppComponent,
    MainNavigationBarComponent,
    DataTableComponent,
    DashboardComponent,
    BarchartComponent,
    FormsRequestDataComponent,
    TestDbdataComponent,
    RadarChartComponent,
    LoginFormComponent,
    CreateMeasureComponent
  ],
  imports: [
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    ChartsModule,
  ],
  providers: [DataServiceService,LoginFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
