import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { BtnComponent } from "../btn/btn.component";
import { OverlayModule } from "@angular/cdk/overlay";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faBell, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    BtnComponent, OverlayModule, FaIconComponent
  ],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  faBell = faBell;
  faInfoCircle = faInfoCircle;

  isOpen = false;
  isOpenBody = false;

  miersona = "bonnier@gmail.com";
}
