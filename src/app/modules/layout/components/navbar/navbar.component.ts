import { Component } from '@angular/core';
import { faAngleDown, faBell, faClose, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

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
}
