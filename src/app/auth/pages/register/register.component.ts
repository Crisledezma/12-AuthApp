import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {

  miFormulario: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email,Validators.minLength(6)]],
    password: ['', [Validators.required,Validators.minLength(6)]]
  });

  constructor(
    public fb          : FormBuilder,
    private router     : Router,
    private authService: AuthService
  ){}

  registro() {
    const { name, email, password } = this.miFormulario.value;
    this.authService.registro(name, email, password)
      .subscribe(ok => {
        if (ok === true) {
          this.router.navigateByUrl('/dashboard');
        } else {
          Swal.fire('Error', ok, 'error')
        }
      })
  }

}
