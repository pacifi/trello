import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faTrello } from "@fortawesome/free-brands-svg-icons";

import { faBox, faClock, faWaveSquare } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [
    NavbarComponent,
    FaIconComponent
  ],
  templateUrl: './boards.component.html'
})
export class BoardsComponent {

  protected readonly faTrello = faTrello;
  protected readonly faWaveSquare = faWaveSquare;
  protected readonly faBox = faBox;
  protected readonly faClock = faClock;
}
