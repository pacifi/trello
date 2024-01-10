import { Component, inject } from '@angular/core';
import { faAngleDown, faBell, faClose, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { AuthService } from "@services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {


  isOpenOverlayAvatar = false;
  isOpenOverlayBoards = false;
  protected readonly faAngleDown = faAngleDown;
  protected readonly faBell = faBell;
  protected readonly faInfoCircle = faInfoCircle;
  protected readonly faClose = faClose;

  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router)


  logout() {
    this.authService.logout();
    this.router.navigate(['/login']).then();
  }


}
