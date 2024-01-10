import { Component, inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataSourceUser } from "./data-source";
import { UsersService } from "@services/users.service";
import { User } from "@models/user.models";
import { AuthService } from "@services/auth.service";
import { toObservable } from "@angular/core/rxjs-interop";
import { map, pairwise } from "rxjs";

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html'
})
export class UsersTableComponent implements OnInit {
  private usersService = inject(UsersService)
  private authService = inject(AuthService)
  dataSource = new DataSourceUser();
  columns: string[] = ['id', 'avatar', 'name', 'email']
  user: User | null = null
  obsrvable = toObservable(this.authService.user$);

  constructor() {
  }

  ngOnInit(): void {
    this.usersService.getUsers()
      .subscribe({
        next: (data) => {
          this.dataSource.init(data);

        },
        error: (err) => {
          console.log(err);
        }
      });
    this.obsrvable.subscribe(
      {
        next: (data) => {
          this.user = data;
        }
      }
    )

  }


}
