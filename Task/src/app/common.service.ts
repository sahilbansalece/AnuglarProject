import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  isloggedin =false;
  userName = "";
  constructor(private httpClient: HttpClient) {
  }
  public getCountryData() {
    return this.httpClient.get("https://restcountries.eu/rest/v2/all");
  }

}
