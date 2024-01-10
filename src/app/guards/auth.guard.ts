import { CanActivateFn, Router } from '@angular/router';
import { inject } from "@angular/core";
import { TokenService } from "@services/token.service";

export const authGuard: CanActivateFn = (route, state) => {
  let tokenService = inject(TokenService);
  let router = inject(Router)
  let isValidToken = tokenService.isValidRefreshToken();
  if (!isValidToken) {
    router.navigate(['login']).then();
    return false;
  }
  return true;
};
