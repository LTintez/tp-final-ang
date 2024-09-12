import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';


@Component({
  selector: 'app-heroes-add-page',
  standalone: true,
  imports: [
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatToolbarModule
  ],
  templateUrl: './heroes-add-page.component.html',
  styleUrl: './heroes-add-page.component.css'
})
export class HeroesAddPageComponent {

}
