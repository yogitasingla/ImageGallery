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
  selector: 'app-doc-appointment',
  templateUrl: './doc-appointment.component.html',
  styleUrls: ['./doc-appointment.component.css']
})
export class DocAppointmentComponent implements OnInit {

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


  constructor(private  router: Router) { }

  ngOnInit(): void {
  }

}
