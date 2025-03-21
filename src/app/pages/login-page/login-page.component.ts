import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
  standalone: false
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  loginFailed = false;

  constructor(
    private fb: FormBuilder,
    private usuariosService: UsuariosService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const { username, password } = this.loginForm.value;

    this.usuariosService.login(username, password).subscribe({
      next: (response) => {
        console.log('Login exitoso:', response);
        this.loginFailed = false;
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Error de login:', error);
        this.loginFailed = true;
      }
    });
  }
}
