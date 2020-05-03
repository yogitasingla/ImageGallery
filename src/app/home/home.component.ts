import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from "@angular/router";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private  router: Router) { }

  ngOnInit(): void {
  }
  appointment(){
    this.router.navigate(['/', 'appointment']).then(nav => {
      console.log(nav); // true if navigation is successful
    }, err => {
      console.log(err) // when there's an error
    });

  }
}
