import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { BtnComponent } from "../btn/btn.component";
import { OverlayModule } from "@angular/cdk/overlay";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    BtnComponent, OverlayModule
  ],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  isOpen = false;

  miersona="bonnier@gmail.com";
}
