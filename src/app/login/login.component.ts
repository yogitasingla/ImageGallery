import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {HttpClient} from "@angular/common/http";

import {ActivatedRoute,Router} from "@angular/router";
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  readonly phoneFormControl = new FormControl('', [
    Validators.required, Validators.pattern(("[6-9]\\d{9}"))
  ]);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);


  matcher = new MyErrorStateMatcher();

  username;
  password;
  phone_no;
  email;
  Registrationpage(){
    this.router.navigate(['/', 'registration']).then(nav => {
      console.log(nav); // true if navigation is successful
    }, err => {
      console.log(err) // when there's an error
    });
  }

 login(){
   alert('login');
 }
google(){
  alert('hhh');
}

  constructor(private  router: Router) { }

  ngOnInit(): void {

  }

}
