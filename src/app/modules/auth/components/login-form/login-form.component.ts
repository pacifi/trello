import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { faPen, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent {
  private formBuilder = inject(FormBuilder);
  router = inject(Router);

  form = this.formBuilder.nonNullable.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  faPen = faPen;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;
  status: string = 'init';

  doLogin() {
    if (this.form.valid) {
      this.status = 'loading';
      const {email, password} = this.form.getRawValue();
      // TODO
    } else {
      this.form.markAllAsTouched();
    }
  }
}
