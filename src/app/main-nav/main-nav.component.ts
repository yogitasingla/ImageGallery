import { Component, OnInit, Injector } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";

import {ActivatedRoute,Router} from "@angular/router";
@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    private  router: Router,private injector: Injector,) { }

    home(){
      this.router.navigate(['/', 'home']).then(nav => {
        console.log(nav); // true if navigation is successful
      }, err => {
        console.log(err) // when there's an error
      });

    }
  registration(){
    this.router.navigate(['/', 'registration']).then(nav => {
      console.log(nav); // true if navigation is successful
    }, err => {
      console.log(err) // when there's an error
    });

  }
login(){
    this.router.navigate(['/', 'login']).then(nav => {
      console.log(nav); // true if navigation is successful
    }, err => {
      console.log(err) // when there's an error
    });

  }
  appointment(){
    this.router.navigate(['/', 'appointment']).then(nav => {
      console.log(nav); // true if navigation is successful
    }, err => {
      console.log(err) // when there's an error
    });

  }

  ngOnInit(): void {
  }

}
