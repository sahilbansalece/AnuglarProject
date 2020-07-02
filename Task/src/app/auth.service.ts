import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _reg = "";

  constructor(private http: HttpClient) { }


  registerUser(users){
    return this.http.post<any>(this._reg, users)
  }

  loggedIn()
  {
    return !!localStorage.getItem('Users')
  }
}
