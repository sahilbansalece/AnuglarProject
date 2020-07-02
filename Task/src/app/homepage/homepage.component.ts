import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  username = "";

  constructor(private cs : CommonService) { }

  ngOnInit(): void {

    if(!this.cs.isloggedin || this.cs.userName=="")
    {
      //redirect to login
    }
    else{
      this.username= this.cs.userName
    }
  }

}
