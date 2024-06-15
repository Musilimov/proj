import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { products } from '../products'; // Путь к файлу products.ts

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {
  products = products; // Присваиваем массив products из products.ts свойству products компонента
}
