import { Component, OnInit,OnDestroy  } from '@angular/core';
import {Router} from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { Subscription } from 'rxjs';

  export class FormFieldPrefixSuffixExample {
    hide = true;
  }

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private router: Router,private service:DataServiceService) { 
    this.subscription = this.service.getMessage().subscribe(message => { 
      if(message.text=="Success"){
        this.message=message.text;
      }

     });
  }


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
     this.router.navigateByUrl('main-navigation');
    }

}
