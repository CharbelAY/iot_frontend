import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DataServiceService } from '../data-service.service';

  export class FormFieldPrefixSuffixExample {
    hide = true;
  }

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private router: Router,private service:DataServiceService) { }


username: string;
password: string;

  ngOnInit() {
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
