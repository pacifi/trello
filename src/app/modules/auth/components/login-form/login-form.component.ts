import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { faPen, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "@services/auth.service";
import { ToastrService } from "ngx-toastr";
import { RequestStatus } from "@models/request-status.models";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent {

  private authService = inject(AuthService);
  private router = inject(Router);
  private toastr: ToastrService = inject(ToastrService);
  private route = inject(ActivatedRoute);
  form = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email]
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(8)]
    })
  })


  faPen = faPen;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;
  status: RequestStatus = 'init'


  constructor() {
    this.route.queryParamMap.subscribe(params => {
      const email = params.get('email');
      if (email) {
        this.form.controls.email.setValue(email);
      }
    })
  }

  doLogin() {
    console.log("On login");
    console.log(this.form);
    if (this.form.valid) {
      this.status = 'loading';
      const {email, password} = this.form.getRawValue();
      this.authService.login(email, password)
        .subscribe(
          {
            next: () => {
              this.status = 'success'
              this.toastr.success('Bien venido', 'Login Completo')
              this.router.navigate(['app']).then((r) => r);
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
