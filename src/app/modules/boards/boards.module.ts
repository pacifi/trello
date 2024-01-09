import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardsRoutingModule } from './boards-routing.module';
import { BoardComponent } from './pages/board/board.component';
import { BoardsComponent } from './pages/boards/boards.component';
import { TodoDialogComponent } from './components/todo-dialog/todo-dialog.component';


@NgModule({
  declarations: [
    BoardComponent,
    BoardsComponent,
    TodoDialogComponent
  ],
  imports: [
    CommonModule,
    BoardsRoutingModule
  ]
})
export class BoardsModule { }
