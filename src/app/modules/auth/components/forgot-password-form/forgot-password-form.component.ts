import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RequestStatus } from "@models/request-status.models";
import { AuthService } from "@services/auth.service";

@Component({
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html'
})
export class ForgotPasswordFormComponent {

  private formBuilder = inject(FormBuilder);
  private authService: AuthService = inject(AuthService);
  form = this.formBuilder.nonNullable.group({
    email: ['', [Validators.email, Validators.required]],
  });
  status: RequestStatus = 'init';
  emailSent = false;

  sendLink() {
    if (this.form.valid) {
      this.status = 'loading';
      const {email} = this.form.getRawValue();
      this.authService.recovery(email)
        .subscribe({
          next: (data) => {
            console.log(data);
            this.status = 'success';
            this.emailSent = true;
          },
          error: (err) => {
            this.status = 'failed';
          }
        })
    } else {
      this.form.markAllAsTouched();
    }
  }
}
