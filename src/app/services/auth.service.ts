import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "@environments/environment";
import { pipe, switchMap, tap } from 'rxjs';
import { TokenService } from "@services/token.service";
import { ResponseLogin } from "@models/auth.models";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private httpClient = inject(HttpClient);
  private tokenService = inject(TokenService);
  apiUrl = environment.API_URL;

  constructor() {
  }

  login(email: string, password: string) {
    return this.httpClient.post<ResponseLogin>(`${this.apiUrl}/api/v1/auth/login`, {email, password})
      .pipe(
        tap(response => {
          this.tokenService.saveToken(response.access_token)
        })
      );
  }

  register(name: string, email: string, password: string) {
    return this.httpClient.post(`${this.apiUrl}/api/v1/auth/register`, {email, password, name});
  }

  registerAndLogin(name: string, email: string, password: string) {
    return this.register(name, email, password)
      .pipe(
        switchMap(() => this.login(email, password))
      )

  }

  isAvailable(email: string) {
    return this.httpClient.post<{ isAvailable: boolean }>(`${this.apiUrl}/api/v1/auth/is-available`, {email});
  }

  recovery(email: string) {
    return this.httpClient.post(`${this.apiUrl}/api/v1/auth/recovery`, {email});
  }

  changePassword(token: string, newPassword: string) {
    return this.httpClient.post(`${this.apiUrl}/api/v1/auth/change-password`, {token, newPassword});
  }
}
