import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { BtnComponent } from "../../components/btn/btn.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    BtnComponent,

  ],
  templateUrl: './login.component.html'
})
export class LoginComponent {

}
