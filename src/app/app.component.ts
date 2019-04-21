import { Component } from '@angular/core';
import { DataServiceService } from './data-service.service';
import {Router} from '@angular/router';


export interface TestData {
  Message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private service:DataServiceService,private router: Router) {}
     ngOnInit() {
       this.showConfig();
   }
  title = 'IoTPlatform';

  td : TestData;
  bl = false;
  bll =true;

  username: string;
  password: string;



  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
    console.log("Tree");
    this.bl=true;
    this.bll=false;
    this.router.navigate(["main-navigation"]);
    }else {
      alert("Invalid credentials");
    }
  }

  showConfig() {
    this.service.getData()
      .subscribe((data: TestData) => this.td = {
          Message: data['Message'],
      });
  }


  
}
