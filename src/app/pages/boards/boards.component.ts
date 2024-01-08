import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faTrello } from "@fortawesome/free-brands-svg-icons";

import {
  faAngleDown,
  faAngleUp,
  faBorderAll,
  faBox,
  faClock, faGear,
  faHeart, faUsers,
  faWaveSquare
} from "@fortawesome/free-solid-svg-icons";
import { CdkAccordionModule } from "@angular/cdk/accordion";

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [
    NavbarComponent,
    FaIconComponent,
    CdkAccordionModule
  ],
  templateUrl: './boards.component.html'
})
export class BoardsComponent {

  protected readonly faTrello = faTrello;
  protected readonly faWaveSquare = faWaveSquare;
  protected readonly faBox = faBox;
  protected readonly faClock = faClock;
  protected readonly faAngleUp = faAngleUp;
  protected readonly faAngleDown = faAngleDown;
  protected readonly faHeart = faHeart;
  protected readonly faBorderAll = faBorderAll;
  protected readonly faUsers = faUsers;
  protected readonly faGear = faGear;

  items = [
    {
      label: 'Item 1',
      items: [
        {
          label: 'Sub item 1.1'
        },
        {
          label: 'Sub item 1.2'
        }
      ]
    },
    {
      label: 'Item 2',
      items: [
        {
          label: 'Sub item 2.1'
        },

      ]
    }
    ,
    {
      label: 'Item 3',
      items: [
        {
          label: 'Sub item 3.1'
        },
        {
          label: 'Sub item 3.2'
        },
        {
          label: 'Sub item 3.3'
        }
      ]
    }
  ]
}
