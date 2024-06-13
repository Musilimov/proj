// import {Component, OnInit} from '@angular/core';
// import {FormBuilder, FormGroup} from "@angular/forms";
// import {HttpClient} from "@angular/common/http";
// import {Router} from "@angular/router";
//
// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrl: './register.component.css'
// })
// export class RegisterComponent implements OnInit{
//   form!: FormGroup;
//   constructor(
//     private formBuilder: FormBuilder,
//     private http: HttpClient,
//     private router: Router
//   ) {}
//   ngOnInit() {
//     this.form = this.formBuilder.group({
//       name: '',
//       email: '',
//       password: ''
//     });
//   }
//   submit(){
//     this.http.post('http://localhost:8000/register', this.form.getRawvalue()).subscribe(() =>{this.router.navigate(['/login']);
//     })
//   }
// }


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: '',
      email: '',
      password: ''
    });
  }

  submit() {
    this.http.post('http://localhost:8000/api/register', this.form.getRawValue()).subscribe(
      () => {
        // Успешный ответ от сервера
        console.log('Регистрация успешна');
        // Перенаправление на страницу входа
        this.router.navigate(['/login']);
      },
      error => {
        // Обработка ошибки
        console.error('Ошибка регистрации:', error);
        // Здесь можно добавить логику для отображения сообщения об ошибке пользователю
      }
    );
  }
}
