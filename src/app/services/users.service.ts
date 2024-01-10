import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { TokenService } from "@services/token.service";
import { environment } from "@environments/environment";
import { ResponseLogin } from "@models/auth.models";
import { User } from "@models/user.models";
import { checkToken } from "../interceptor/token.interceptor";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private httpClient = inject(HttpClient);
  private tokenService = inject(TokenService);


  private http = inject(HttpClient);
  apiUrl = environment.API_URL;
  headers = {};

  constructor() {

    this.headers = {
      Authorization: `Bearer ${this.tokenService.getToken()}`
    }
  }

  getUsers() {

    return this.httpClient.get<User[]>(`${this.apiUrl}/api/v1/users`, {
      context: checkToken()
    });
  }


}
