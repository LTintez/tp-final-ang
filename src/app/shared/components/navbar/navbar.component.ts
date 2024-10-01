import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, 
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  @Output() marvelLogoClicked = new EventEmitter<void>();
  @Output() dcLogoClicked = new EventEmitter<void>();
  
  isSidebarOpen = false;

  constructor(private router : Router){

  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  logoutRedirect() {
    this.router.navigate(['/login']);
  }

  onMarvelLogoClick() {
    this.marvelLogoClicked.emit(); 
  }

  onDcLogoClick() {
    this.dcLogoClicked.emit(); 
  }
}
