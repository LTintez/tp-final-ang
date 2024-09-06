import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes-list-page',
  standalone: true,
  imports: [],
  templateUrl: './heroes-list-page.component.html',
  styleUrl: './heroes-list-page.component.css'
})
export class HeroesListPageComponent {
  data: any = [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane.smith@example.com"
    }
  ];

  
  
}