import { Component, OnInit } from '@angular/core';
import { Emitters } from '../emitters/emitters';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  authenticated = false;
  message = '';
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (auth: boolean) => {
        this.authenticated = auth;
      },
    );

    // Проверка текущего состояния аутентификации при загрузке компонента
    this.http.get('http://localhost:8000/api/user', { withCredentials: true })
      .subscribe(
        (response: any) => {
          this.authenticated = true;
          Emitters.authEmitter.emit(true);
        },
        (error) => {
          this.authenticated = false;
          Emitters.authEmitter.emit(false);
        }
      );
  }

  logout(): void {
    this.http.post('http://localhost:8000/api/logout', {}, { withCredentials: true })
      .subscribe(() => {
        this.authenticated = false;
        Emitters.authEmitter.emit(false);
        this.router.navigate(['/login']); // Перенаправление на страницу входа
      });
  }
}
// import { Component, OnInit } from '@angular/core';
// import { Emitters } from '../emitters/emitters';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';
//
// @Component({
//   selector: 'app-nav',
//   templateUrl: './nav.component.html',
//   styleUrls: ['./nav.component.css']
// })
// export class NavComponent implements OnInit {
//   authenticated = false;
//
//   constructor(private http: HttpClient, private router: Router) {}
//
//   ngOnInit(): void {
//     Emitters.authEmitter.subscribe(
//       (auth: boolean) => {
//         this.authenticated = auth;
//       }
//     );
//
//     // Проверка текущего состояния аутентификации при загрузке компонента
//     this.http.get('http://localhost:8000/api/login', { withCredentials: true })
//       .subscribe(
//         (response: any) => {
//           this.authenticated = true;
//           Emitters.authEmitter.emit(true);
//         },
//         (error) => {
//           this.authenticated = false;
//           Emitters.authEmitter.emit(false);
//         }
//       );
//   }
//
//   logout(): void {
//     this.http.get('http://localhost:8000/api/logout', { withCredentials: true })
//       .subscribe(() => {
//         this.authenticated = false;
//         Emitters.authEmitter.emit(false);
//         this.router.navigate(['/login']).then(() => {
//           this.router.navigate(['/home']); // Перенаправление на страницу home после logout
//         });
//       });
//   }
// }
