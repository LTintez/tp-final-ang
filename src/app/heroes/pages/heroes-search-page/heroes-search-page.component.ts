import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatList, MatListItem } from '@angular/material/list';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-heroes-search-page',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatListItem,
    MatList,
  ],
  templateUrl: './heroes-search-page.component.html',
  styleUrl: './heroes-search-page.component.css'
})
export class HeroesSearchPageComponent implements OnInit {
  searchTerm: string = '';
  heroes: any[] = [];
  filteredHeroes: any[] = [];

  ngOnInit(): void {
    this.loadHeroes();
  }

  loadHeroes() {
    const heroesData = localStorage.getItem('heroes');
    if (heroesData) {
      this.heroes = JSON.parse(heroesData);
      this.filteredHeroes = this.heroes; 
    } else {
      this.heroes = [];
      this.filteredHeroes = [];
    }
  }

  onSearch() {
    if (this.searchTerm) {
      this.filteredHeroes = this.heroes.filter(hero =>
        hero.superHero.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredHeroes = this.heroes;
    }
  }
}