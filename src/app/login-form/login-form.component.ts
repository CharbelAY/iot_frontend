import { Component, OnInit,OnDestroy  } from '@angular/core';
import {Router} from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { Subscription } from 'rxjs';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';


  export class FormFieldPrefixSuffixExample {
    hide = true;
  }

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
        this.message=message.text;
        this.isLoggedIn=true;
        this.router.navigateByUrl('main-navigation');
        console.log("eyyy");
      }

     });
  }

  public canActivate(next:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
    if(this.isLoggedIn){
      return true;
    }else{
      this.router.navigate([""]);
      return false;
    }
};


username: string;
password: string;

message: string;
subscription: Subscription;

  ngOnInit() {
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
