import { Component } from '@angular/core';
import {
  faBox,
  faWaveSquare,
  faClock,
  faAngleUp,
  faAngleDown,
  faHeart,
  faBorderAll,
  faUsers,
  faGear
} from '@fortawesome/free-solid-svg-icons';
import { faTrello } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html'
})
export class BoardsComponent {
  protected readonly faTrello = faTrello;
  protected readonly faBox = faBox;
  protected readonly faWaveSquare = faWaveSquare;
  protected readonly faClock = faClock;
  protected readonly faAngleUp = faAngleUp;
  protected readonly faAngleDown = faAngleDown;
  protected readonly faHeart = faHeart;
  protected readonly faBorderAll = faBorderAll;
  protected readonly faUsers = faUsers;
  protected readonly faGear = faGear;

}
