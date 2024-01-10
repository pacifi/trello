import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersTableComponent } from "./pages/users-table/users-table.component";
import { authGuard } from "@guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    component: UsersTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
