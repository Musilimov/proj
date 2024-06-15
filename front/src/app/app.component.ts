import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  userData: any;
  message: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // Вы можете вызвать методы DataService здесь или в других методах жизненного цикла компонента
    this.getUserInfo();
  }

  getUserInfo() {
    this.dataService.getUserData().subscribe(
      (response) => {
        this.userData = response;
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
  }

  registerUser() {
    const userData = {
      username: 'example',
      email: 'example@example.com',
      password: 'examplepassword'
      // Добавьте другие поля, если необходимо
    };

    this.dataService.registerUser(userData).subscribe(
      (response) => {
        console.log('Registration successful:', response);
        this.message = 'Registration successful';
        // Можно обновить данные пользователя, если требуется
        this.getUserInfo();
      },
      (error) => {
        console.error('Error registering user:', error);
        this.message = 'Registration failed';
      }
    );
  }

  loginUser() {
    const credentials = {
      email: 'example@example.com',
      password: 'examplepassword'
    };

    this.dataService.loginUser(credentials).subscribe(
      (response) => {
        console.log('Login successful:', response);
        this.message = 'Login successful';
        // Можно обновить данные пользователя, если требуется
        this.getUserInfo();
      },
      (error) => {
        console.error('Error logging in:', error);
        this.message = 'Login failed';
      }
    );
  }

  logoutUser() {
    this.dataService.logoutUser().subscribe(
      (response) => {
        console.log('Logout successful:', response);
        this.message = 'Logout successful';
        this.userData = null; // Очистить данные пользователя после выхода
      },
      (error) => {
        console.error('Error logging out:', error);
        this.message = 'Logout failed';
      }
    );
  }
}
