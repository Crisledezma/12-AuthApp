import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {

  miFormulario: FormGroup = this.fb.group({
    name: ['Test1', [Validators.required, Validators.minLength(3)]],
    email: ['test1@test.com', [Validators.required, Validators.email,Validators.minLength(6)]],
    password: ['123456', [Validators.required,Validators.minLength(6)]]
  });

  constructor(
    public fb: FormBuilder,
    private router: Router
  ){}

  registro() {
    console.log(this.miFormulario.value);
    console.log(this.miFormulario.valid);
    this.router.navigateByUrl('/dashboard');
  }

}
