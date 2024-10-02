import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {
  MatHeaderCellDef,
  MatCellDef,
  MatColumnDef,
  MatHeaderRowDef,
  MatRowDef,
} from '@angular/material/table';
import { Heroe } from '../../interfaces/heroes';
import { HeroesService } from '../../services/heroes.service';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';

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
    MatCard,
    MatCardContent,
    MatCardSubtitle,
    MatCardTitle,
    MatCardHeader,
  ],
  templateUrl: './heroes-list-page.component.html',
  styleUrl: './heroes-list-page.component.css',
})
export class HeroesListPageComponent implements OnInit {
  displayedColumns: string[] = [
    'superHero',
    'alterEgo',
    'firstAppearance',
    'characters',
    'creator',
  ];
  heroes: Heroe[] = [];

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.loadHeroes();
  }

  loadHeroes() {
    this.heroesService.getData().subscribe(
      (data: any) => {
        this.heroes = data;
        console.log(data);
      },
      (error) => {
        console.error('Error loading heroes data', error);
        this.heroes = [
          {
            superHero: 'Superman',
            alterEgo: 'Clark Kent',
            firstAppearance: 'Action Comics #1',
            characters: 'Lois Lane, Lex Luthor',
            creator: 'DC',
          },
          {
            superHero: 'Spider-Man',
            alterEgo: 'Peter Parker',
            firstAppearance: 'Amazing Fantasy #15',
            characters: 'Mary Jane Watson, Green Goblin',
            creator: 'Marvel',
          },
        ];
      }
    );
  }
}
