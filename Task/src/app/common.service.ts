import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  isloggedin =false;
  userName= "";
  constructor() { }
}
