import { Injectable } from '@angular/core';
import { getCookie, removeCookie, setCookie } from 'typescript-cookie';
import { jwtDecode, JwtPayload } from "jwt-decode";


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

  saveRefreshToken(token: string) {
    setCookie('refresh-token-app', token, {expires: 7, path: '/'})
  }

  getRefreshToken() {
    return getCookie('refresh-token-app');
  }

  removeRefreshToken() {
    removeCookie('refresh-token-app');
  }

  isValidToken() {
    const token = this.getToken();
    if (!token) {
      return false;
    }
    const decodeToken = jwtDecode<JwtPayload>(token);
    if (decodeToken && decodeToken?.exp) {
      const tokenDate = new Date(0);
      tokenDate.setUTCSeconds(decodeToken.exp);
      const today = new Date();
      return tokenDate.getTime() > today.getTime();

    }
    return false;
  }

  isValidRefreshToken() {
    const token = this.getRefreshToken();
    if (!token) {
      return false;
    }
    const decodeToken = jwtDecode<JwtPayload>(token);
    if (decodeToken && decodeToken?.exp) {
      const tokenDate = new Date(0);
      tokenDate.setUTCSeconds(decodeToken.exp);
      const today = new Date();
      return tokenDate.getTime() > today.getTime();

    }
    return false;
  }
}
