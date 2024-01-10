import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from "@angular/core";
import { TokenService } from "@services/token.service";

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  let tokenService = inject(TokenService);



  return next(req);

};
