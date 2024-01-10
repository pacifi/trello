import { Injectable } from '@angular/core';
import { getCookie, removeCookie, setCookie } from 'typescript-cookie';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() {
  }

  saveToken(token: string) {
    setCookie('token-app', token, {expires: 7, path: '/'})
  }

  getToken() {
    return getCookie('token-app');
  }

  removeToken() {
    removeCookie('token-app');
  }
}
