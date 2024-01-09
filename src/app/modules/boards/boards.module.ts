import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardsRoutingModule } from './boards-routing.module';
import { BoardComponent } from './pages/board/board.component';
import { BoardsComponent } from './pages/boards/boards.component';
import { TodoDialogComponent } from './components/todo-dialog/todo-dialog.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SharedModule } from "@shared/shared.module";
import { CdkAccordionModule } from "@angular/cdk/accordion";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { DialogModule } from "@angular/cdk/dialog";


@NgModule({
  declarations: [
    BoardComponent,
    BoardsComponent,
    TodoDialogComponent
  ],
  imports: [
    CommonModule,
    BoardsRoutingModule,
    DragDropModule,
    SharedModule,
    CdkAccordionModule,
    DialogModule,
    FontAwesomeModule,

  ]
})
export class BoardsModule {
}
