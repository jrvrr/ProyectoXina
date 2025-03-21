import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
  standalone: false
})
export class RegisterPageComponent {
  registerForm: FormGroup;
  errorMessage: string = '';
  passwordMismatch: boolean = false;

  constructor(
    private fb: FormBuilder,
    private usuariosService: UsuariosService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      usuario: ['', Validators.required],
      contrasenia: ['', [Validators.required, Validators.minLength(6)]],
      confirmContrasenia: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) return;

    if (this.registerForm.value.contrasenia !== this.registerForm.value.confirmContrasenia) {
      this.passwordMismatch = true;
      return;
    }

    this.passwordMismatch = false;

    const newUser = {
      usuario: this.registerForm.value.usuario,
      contrasenia: this.registerForm.value.contrasenia,
      idRol: 1
    };

    this.usuariosService.crearUsuario(newUser).subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: () => {
        this.errorMessage = 'No se pudo completar el registro. Intenta de nuevo.';
      }
    });
  }
}
