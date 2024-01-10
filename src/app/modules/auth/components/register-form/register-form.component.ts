import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { CustomValidators } from "@utils/validators";
import { RequestStatus } from "@models/request-status.models";
import { AuthService } from "@services/auth.service";
import { ToastrService } from "ngx-toastr";


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html'
})
export class RegisterFormComponent {

  private router: Router = inject(Router);
  private authService = inject(AuthService);
  private toastr: ToastrService = inject(ToastrService);


  formUser = new FormGroup({
    email: new FormControl('', {nonNullable: true, validators: [Validators.email, Validators.required]})
  })

  form = new FormGroup(
    {
      name: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
      email: new FormControl('', {nonNullable: true, validators: [Validators.email, Validators.required]}),
      password: new FormControl('', {nonNullable: true, validators: [Validators.minLength(8), Validators.required]}),
      confirmPassword: new FormControl('', [Validators.required])
    },
    {
      validators: [CustomValidators.MatchValidator('password', 'confirmPassword')]
    }
  )

  status: RequestStatus = 'init';
  statusUser: RequestStatus = 'init';
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;
  showRegisterForm = false;

  register() {
    if (this.form.valid) {
      this.status = 'loading';
      const {name, email, password} = this.form.getRawValue();
      this.authService.registerAndLogin(name, email, password).subscribe(
        {
          next: () => {
            this.status = 'success';
            this.toastr.success('Usuario creado', 'Usuario creado')
            this.router.navigate(['/app/boards']).then(r => r);
          },
          error: (err) => {
            this.status = 'failed'
            if (err.code = "SQLITE_CONSTRAINT_UNIQUE") {
              this.toastr.error('El usuario ya existe', 'Error al crear usuario')
            }

          }
        }
      )
    } else {
      this.form.markAllAsTouched();
    }
  }

  validateUser() {
    if (this.formUser.valid) {
      this.statusUser = 'loading';
      const {email} = this.formUser.getRawValue();
      this.authService.isAvailable(email).subscribe({
        next: (data) => {
          this.statusUser = 'success';
          if (data.isAvailable) {
            this.toastr.success('Usted puede registrase', 'Usuario No existe');
            this.form.controls.email.setValue(email);
            this.showRegisterForm = true;

          } else {
            this.toastr.warning('Usted puede logearse', 'Usuario existente');
            this.router.navigate(['/login'], {queryParams: {email}}).then(r => r);
            this.showRegisterForm = false;
          }

        },
        error: (err) => {
          this.statusUser = 'failed';
          this.toastr.error('Datos incorrectos', 'Datos incorrectos');
          this.showRegisterForm = false;
          console.log(err);
        }
      })

    } else {
      this.formUser.markAllAsTouched();
    }
  }

}
