import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "@environments/environment";
import { switchMap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private httpClient = inject(HttpClient);
  apiUrl = environment.API_URL;

  constructor() {
  }

  login(email: string, password: string) {
    return this.httpClient.post(`${this.apiUrl}/api/v1/auth/login`, {email, password});
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
}
