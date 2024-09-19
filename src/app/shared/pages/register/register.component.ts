import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginService } from '../../../heroes/services/login.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private registerService: LoginService
  ) {
    this.registerForm = this.fb.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      { validator: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null
      : { mismatch: true };
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const { name, email, password } = this.registerForm.value;

      this.registerService.checkEmailExists(email).subscribe(
        (emailExists) => {
          if (emailExists) {
            alert('El correo electrónico ya está registrado.');
          } else {
            this.registerService.registerUser(name, email, password).subscribe(
              () => {
                alert('Usuario registrado exitosamente');
                this.router.navigate(['/login']);
              },
              (error) => {
                console.error('Error al registrar usuario:', error);
                alert('Hubo un error al registrar el usuario.');
              }
            );
          }
        },
        (error) => {
          console.error('Error al verificar el usuario:', error);
        }
      );
    }
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }
}
