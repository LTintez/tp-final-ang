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
import { HeroesService } from '../../services/heroes.service';


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

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private heroesService: HeroesService  // Inyecta el servicio aquí
  ) {
    this.heroForm = this.fb.group({
      superHero: ['', Validators.required],
      alterEgo: ['', Validators.required],
      firstAppearance: ['', Validators.required],
      characters: ['', Validators.required],
      creator: ['', Validators.required],
      altImage: ['']
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.heroForm.valid) {
      const newHero = this.heroForm.value;      
      
      this.heroesService.addHero(newHero).subscribe(
        (response: any) => {
          console.log('Héroe agregado:', response);
          this.heroForm.reset();           
        },
        (error: any) => {
          console.error('Error al agregar héroe:', error);
        }
      );
    }
  }
}
