import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  username = "";
  password = "";
  countryData;

  constructor(private cs : CommonService) { }

  ngOnInit(): void {
    var loggedin = localStorage.getItem("isLogin");
    if (loggedin !== "true") {
      window.location.replace("/login");
    } else {
      this.username = localStorage.getItem("User");
      this.password = localStorage.getItem("password");
      this.cs.getCountryData().subscribe((data) => {
        this.countryData = data;
        console.log(data);
      })
    }
  }

  logout() {
    localStorage.clear();
    window.location.replace("/login");
  }

}
