import { Component, OnInit,OnDestroy  } from '@angular/core';
import {Router} from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { Subscription } from 'rxjs';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements CanActivate{

  public isLoggedIn: boolean = false;
  public redirectUrl:string;


  constructor(private router: Router,private service:DataServiceService) { 
    this.subscription = this.service.getMessage().subscribe(message => { 
      if(message.text=="Success"){
        router.navigateByUrl("main-navigation");
      }

     });
  }

  public canActivate(){
    console.log(this.service.isLoggedIn());
    if(this.service.isLoggedIn()){
      return true;
    }else{
      window.alert("Wrong Credentials");
      return false;
    }
};


username: string;
password: string;

subscription: Subscription;

  ngOnInit() {
    if(this.service.isLoggedIn()){
      this.router.navigateByUrl("main-navigation")
    }
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}

  login() : void {
      var lf:loginform = { 
        username:this.username,
        password:this.password
     } 
     this.service.login(lf);
    }

  

}
