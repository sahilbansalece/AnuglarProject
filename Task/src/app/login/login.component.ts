import { AuthService } from './../auth.service';
import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName ="";
  password ="";
  user: any= {};
  loginform: FormGroup;
  constructor(private cs: CommonService, private lb: FormBuilder, private _auth: AuthService) { }

  ngOnInit(): void {
    var LoggedIn = localStorage.getItem("isLogin");
    if (LoggedIn === "true") {
      window.location.replace("/home");
    }
    this.createloginform();
  }

  createloginform()
  {
    this.loginform = this.lb.group({
      email: [null],
      password: [null]
    });
  }

  loginUser()
  {
    this.user = Object.assign(this.user, this.loginform.value);
    localStorage.setItem('Users', JSON.stringify(this.user));
    if ((this.user.email == "Shivam" && this.user.password == "Test123") || (this.user.email == "Sahil" && this.user.password == "Test123") || (this.user.email == "Palak" && this.user.password == "Test123"))
    {
      localStorage.setItem("isLogin", "true");
      localStorage.setItem("User", this.user.email);
      localStorage.setItem("password",this.user.password);
      window.location.replace("/home");

    }
  } 

}
