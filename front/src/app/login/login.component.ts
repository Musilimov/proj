import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  submit(): void {
    this.http.post('http://localhost:8000/api/login', this.form.getRawValue(), {
      withCredentials: true
    }).subscribe(
      () => {
        this.router.navigate(['/home']);
      },
      (error) => {
        this.errorMessage = error.error.detail || 'An error occurred during login.';
        console.error('Login error', error);
      }
    );
  }
}
//
// import {FormBuilder, FormGroup} from '@angular/forms';
// import {HttpClient} from '@angular/common/http';
// import {Router} from '@angular/router';
// import {OnInit,Component} from "@angular/core";
//
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   form!: FormGroup;
//
//   constructor(
//     private formBuilder: FormBuilder,
//     private http: HttpClient,
//     private router: Router
//   ) {
//   }
//
//   ngOnInit(): void {
//     this.form = this.formBuilder.group({
//       email: '',
//       password: ''
//     });
//   }
//
//   submit(): void {
//     this.http.post('http://localhost:8000/api/login', this.form.getRawValue(), {
//       withCredentials: true
//     }).subscribe(() => this.router.navigate(['/']));
//   }
// }
