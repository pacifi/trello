import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { faPen, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Router } from "@angular/router";
import { AuthService } from "@services/auth.service";
import { ToastrService } from "ngx-toastr";
import { RequestStatus } from "@models/request-status.models";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent {
  private formBuilder = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  private toastr: ToastrService = inject(ToastrService);

  form = this.formBuilder.nonNullable.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  faPen = faPen;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;
  status: RequestStatus = 'init'

  doLogin() {
    if (this.form.valid) {
      this.status = 'loading';
      const {email, password} = this.form.getRawValue();
      this.authService.login(email, password)
        .subscribe(
          {
            next: () => {
              this.status = 'success'
              this.toastr.success('Bien venido', 'Login Completo')
              this.router.navigate(['app']);
            },
            error: () => {
              this.toastr.error('Pruebe de nuevo', 'Problema de Authenticación')
              this.status = 'failed';
            }
          }
        )
    } else {
      this.form.markAllAsTouched();
    }
  }
}
