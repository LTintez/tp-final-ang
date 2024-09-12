import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { MatListItem } from '@angular/material/list';

@Component({
  selector: 'app-heroes-add-page',
  standalone: true,
  imports: [
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatListItem
  ],
  templateUrl: './heroes-add-page.component.html',
  styleUrls: ['./heroes-add-page.component.css']
})
export class HeroesAddPageComponent implements OnInit {
  heroForm: FormGroup;
  heroes: any[] = [];

  constructor(private fb: FormBuilder, private router: Router) {
    this.heroForm = this.fb.group({
      superHero: ['', Validators.required],
      alterEgo: ['', Validators.required],
      firstAppearance: ['', Validators.required],
      characters: ['', Validators.required],
      creator: ['', Validators.required],
      altImage: ['']
    });
  }

  ngOnInit(): void {
    this.loadHeroes();
  }

  loadHeroes() {
    const heroesData = localStorage.getItem('heroes');
    if (heroesData) {
      this.heroes = JSON.parse(heroesData);
    } else {
      this.heroes = [];
    }
  }

  onSubmit() {
    if (this.heroForm.valid) {
      const newHero = this.heroForm.value;
      this.heroes.push(newHero);
      localStorage.setItem('heroes', JSON.stringify(this.heroes));
      console.log('Héroe agregado:', newHero);
      this.heroForm.reset();  // Resetea el formulario después de agregar
      // Opcional: Redirige a otra página si es necesario
      // this.router.navigate(['/heroes-list']);
    }
  }
}
