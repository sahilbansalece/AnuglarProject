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
    this.createloginform();
    if(this.cs.isloggedin)
    {  
      ///redirect to homepage

    }
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

  this._auth.registerUser(this.loginform)
  .subscribe(
    res => console.log(res),
    err => console.log(err)
  )
  this.user = Object.assign(this.user, this.loginform.value);
  localStorage.setItem('Users', JSON.stringify(this.user));
    if(this.userName == "shivam" && this.password=="123")
    {
      this.cs.userName= "shivam";
      this.cs.isloggedin = true;
       //redirect to homepage

    }
  } 

}
