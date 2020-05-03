import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {HttpClient} from "@angular/common/http";

import {ActivatedRoute,Router} from "@angular/router";

interface gender {
  value: string;
  viewValue: string;
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  Gender: gender[] = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'},
    {value: 'other', viewValue: 'other'}
  ];
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
    alert('registraioo');
  }
  login(){
    this.router.navigate(['/', 'login']).then(nav => {
      console.log(nav); // true if navigation is successful
    }, err => {
      console.log(err) // when there's an error
    });

  }

  constructor(private  router: Router) { }

  ngOnInit(): void {
  }

}
