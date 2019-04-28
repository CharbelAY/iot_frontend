import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { DataTableComponent } from '../data-table/data-table.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      // if (matches) {
      //   return [
      //     { title: 'Packet', cols: 1, rows: 1,num:1 },
      //     { title: 'Other Stuff', cols: 1, rows: 1,num:2 },
      //     { title: 'Something Else', cols: 1, rows: 1 },
      //     { title: 'More', cols: 1, rows: 1 }
      //   ];
      // }

      return [
        // { title: 'Packet', cols: 2, rows: 2,num:1 },
        { title: 'Packets Line Chart', cols: 2, rows: 2,num:5},
        { title: 'Packet Loss Methode 1', cols: 1, rows: 1 ,num:2},
        { title: 'Packet Loss Method 2', cols: 1, rows: 1,num:3},
        { title: 'Number of Transmission before reception', cols: 1, rows: 1,num:4}
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
