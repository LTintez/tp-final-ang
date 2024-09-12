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
export class HeroesListPageComponent {
  displayedColumns: string[] = ['superHero', 'alterEgo', 'firstAppearance', 'characters', 'creator'];

  heroes: Heroe[] = [
    { superHero: 'Superman', alterEgo: 'Clark Kent', firstAppearance: 'Action Comics #1', characters: 'Superman, Kal-El', creator: 'DC' },
    { superHero: 'Spider-Man', alterEgo: 'Peter Parker', firstAppearance: 'Amazing Fantasy #15', characters: 'Spider-Man, Peter Parker', creator: 'Marvel' },
    { superHero: 'Batman', alterEgo: 'Bruce Wayne', firstAppearance: 'Detective Comics #27', characters: 'Batman, Bruce Wayne', creator: 'DC' },
    { superHero: 'Iron Man', alterEgo: 'Tony Stark', firstAppearance: 'Tales of Suspense #39', characters: 'Iron Man, Tony Stark', creator: 'Marvel' }
  ];

  
  
}