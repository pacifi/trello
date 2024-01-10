import { Component, inject, OnInit } from '@angular/core';
import { faAngleDown, faBell, faClose, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { AuthService } from "@services/auth.service";
import { Router } from "@angular/router";
import { User } from "@models/user.models";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {


  isOpenOverlayAvatar = false;
  isOpenOverlayBoards = false;
  protected readonly faAngleDown = faAngleDown;
  protected readonly faBell = faBell;
  protected readonly faInfoCircle = faInfoCircle;
  protected readonly faClose = faClose;

  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router)
  user: User | null = null;

  ngOnInit(): void {
    this.authService.getProfile()
      .subscribe({
        next: (data) => {
          this.user = data;
        },
        error: (err) => {

        }
      });
  }


  logout() {
    this.authService.logout();
    this.router.navigate(['/login']).then();
  }


}
