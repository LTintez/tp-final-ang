import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-heroes-search-page',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './heroes-search-page.component.html',
  styleUrl: './heroes-search-page.component.css'
})
export class HeroesSearchPageComponent {

}
