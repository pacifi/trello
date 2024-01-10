import { HttpContext, HttpContextToken, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from "@angular/core";
import { TokenService } from "@services/token.service";
import { AuthService } from "@services/auth.service";
import { switchMap, tap } from "rxjs";

const CHECK_TOKEN = new HttpContextToken<boolean>(() => false);

export function checkToken() {
  return new HttpContext().set(CHECK_TOKEN, true);
}

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

  if (req.context.get(CHECK_TOKEN)) {

    let tokenService = inject(TokenService);
    let accessToken = tokenService.getToken();
    let authService = inject(AuthService);
    const isValidToken = tokenService.isValidToken();
    if (isValidToken) {

      // Function Add
      const accessToken = tokenService.getToken();
      if (accessToken) {
        console.log("check Access");
        const authRequest = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${accessToken}`)
        });
        return next(authRequest);
      }
      return next(req);
      // End Funciotn ADD
    } else {
      // Function Update
      const refreshToken = tokenService.getRefreshToken();
      const isValidRefresToken = tokenService.isValidRefreshToken();
      if (refreshToken && isValidRefresToken) {
        authService.refreshToken(refreshToken)
          .pipe(
            tap(() => {
              // Function Add
              const accessToken = tokenService.getToken();
              if (accessToken) {
                const authRequest = req.clone({
                  headers: req.headers.set('Authorization', `Bearer ${accessToken}`)
                });
                return next(authRequest);
              }
              return next(req);
              // End Funciotn ADD
            })
          )
      }
      return next(req);
    }


  }

  return next(req);
};



