import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatHeaderCellDef, MatCellDef, MatColumnDef, MatHeaderRowDef, MatRowDef } from '@angular/material/table';
import { Heroe } from '../../interfaces/heroes';

@Component({
  selector: 'app-heroes-list-page',
  standalone: true,
  imports: [
    MatTableModule,
    MatHeaderCellDef,
    MatCellDef,
    MatColumnDef,
    MatHeaderRowDef,
    MatRowDef,
  ],
  templateUrl: './heroes-list-page.component.html',
  styleUrl: './heroes-list-page.component.css'
})
export class HeroesListPageComponent implements OnInit {
  displayedColumns: string[] = ['superHero', 'alterEgo', 'firstAppearance', 'characters', 'creator'];
  heroes: Heroe[] = [];

  ngOnInit(): void {
    this.loadHeroes();
  }

  loadHeroes() {
    const heroesData = localStorage.getItem('heroes');
    if (heroesData) {
      this.heroes = JSON.parse(heroesData);
    } else {
      // Inicializar con datos por defecto si no hay datos en localStorage
      this.heroes = [
        { superHero: 'Superman', alterEgo: 'Clark Kent', firstAppearance: 'Action Comics #1', characters: 'Lois Lane, Lex Luthor', creator: 'DC' },
        { superHero: 'Spider-Man', alterEgo: 'Peter Parker', firstAppearance: 'Amazing Fantasy #15', characters: 'Mary Jane Watson, Green Goblin', creator: 'Marvel' }
      ];
      localStorage.setItem('heroes', JSON.stringify(this.heroes));
    }
  }
}
  
