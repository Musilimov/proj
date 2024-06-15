import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Emitters } from '../emitters/emitters';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message = '';
  nam = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/user', { withCredentials: true }).subscribe(
      (res: any) => {
        this.message = `${res.name}`;
        Emitters.authEmitter.emit(true);
        this.nam = true;
      },
      err => {
        // this.message = 'You are not logged in';
        Emitters.authEmitter.emit(false);
        this.nam = false;
      }
    );
  }

  protected readonly Emitters = Emitters;
}
