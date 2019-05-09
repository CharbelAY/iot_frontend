import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Router} from '@angular/router';
import { DataServiceService } from '../data-service.service';


@Component({
  selector: 'app-main-navigation-bar',
  templateUrl: './main-navigation-bar.component.html',
  styleUrls: ['./main-navigation-bar.component.css']
})
export class MainNavigationBarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,private router: Router,private service:DataServiceService) {}

  create:boolean=true;
  dash:boolean=false;
  tabe:boolean=false;
  history:boolean=false;
  mainmeasure:boolean=false;


  logout(){
    this.service.logout();
    this.router.navigateByUrl('');
  }
}
