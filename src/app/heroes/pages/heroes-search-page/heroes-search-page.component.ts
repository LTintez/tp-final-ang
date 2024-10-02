import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatList, MatListItem } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

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
    MatIconModule,
    RouterModule,
  ],
  templateUrl: './heroes-search-page.component.html',
  styleUrls: ['./heroes-search-page.component.css'],
})
export class HeroesSearchPageComponent implements OnInit {
  searchTerm: string = '';
  heroes: any[] = [];
  filteredHeroes: any[] = [];

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.loadHeroes();
  }

  loadHeroes() {
    this.heroesService.getData().subscribe(
      (data) => {
        this.heroes = data;
        this.filteredHeroes = this.heroes;
      },
      (error) => {
        console.error('Error al cargar los héroes:', error);
        this.heroes = [];
        this.filteredHeroes = [];
      }
    );
  }

  onSearch() {
    if (this.searchTerm) {
      this.filteredHeroes = this.heroes.filter((hero) =>
        hero.superHero.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredHeroes = this.heroes;
    }
  }
}
