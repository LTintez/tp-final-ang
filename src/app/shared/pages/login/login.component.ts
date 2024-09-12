import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../../../heroes/services/login.service';
import * as userData from '../../../assets/users.json';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  users: any = [];
  loginForm: FormGroup;  

  ngOnInit(): void {
    this.users = (userData as any).default;
    console.log(this.users); 
  }

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      const user = this.users.find((u: any) => u.email === email && u.password === password);
      
      if (user) {
        console.log('Inicio de sesión exitoso');
        this.router.navigate(['/home']);
      } else {
        console.log('Credenciales incorrectas');
        alert('Correo o contraseña incorrectos');
      }
    }
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}