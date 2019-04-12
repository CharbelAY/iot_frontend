import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Packet Loss', cols: 1, rows: 1 },
          { title: 'Other Stuff', cols: 1, rows: 1 },
          { title: 'Something Else', cols: 1, rows: 1 },
          { title: 'More', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Packet Loss', cols: 2, rows: 1 },
        { title: 'Other Stuff', cols: 1, rows: 1 },
        { title: 'Something Else', cols: 1, rows: 2 },
        { title: 'More', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
