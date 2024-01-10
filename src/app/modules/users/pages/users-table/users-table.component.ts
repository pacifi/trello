import { Component, inject, OnInit } from '@angular/core';
import { DataSourceUser } from "./data-source";
import { UsersService } from "@services/users.service";

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html'
})
export class UsersTableComponent implements OnInit {
  private usersService = inject(UsersService)
  dataSource = new DataSourceUser();
  columns: string[] = ['id', 'avatar', 'name', 'email'];

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
      })
  }
}
