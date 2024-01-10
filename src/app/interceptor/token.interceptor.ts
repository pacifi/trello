import { HttpContext, HttpContextToken, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from "@angular/core";
import { TokenService } from "@services/token.service";

const CHECK_TOKEN = new HttpContextToken<boolean>(() => false);

export function checkToken() {
  return new HttpContext().set(CHECK_TOKEN, true);
}

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

  if (req.context.get(CHECK_TOKEN)) {

    let tokenService = inject(TokenService);

    let accessToken = tokenService.getToken();

    if (accessToken) {
      let authRequest = req.clone(
        {
          headers: req.headers.set('Authorization', `Bearer ${accessToken}`)
        }
      )
      return next(authRequest);
    }
  }
  return next(req);
};



