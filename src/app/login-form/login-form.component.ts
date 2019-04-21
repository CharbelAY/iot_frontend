import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material'

  export class FormFieldPrefixSuffixExample {
    hide = true;
  }

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private router: Router) { }


username: string;
password: string;

  ngOnInit() {
  }


  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigateByUrl('main-navigation');
    }else {
      alert("Invalid credentials");
    }
  }

}
