import { Component, inject } from '@angular/core';
import {
  faClose,
  faCheckToSlot,
  faBars,
  faUser,
  faTag,
  faCheckSquare,
  faClock,
} from '@fortawesome/free-solid-svg-icons';

import { DIALOG_DATA, DialogRef } from "@angular/cdk/dialog";
import { ToDo } from "@models/todo.models";


interface InputData {
  todo: ToDo;
}

interface OutputData {
  rta: boolean;
}

@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html'
})
export class TodoDialogComponent {

  protected readonly faClose = faClose;
  protected readonly faCheckToSlot = faCheckToSlot;
  protected readonly faBars = faBars;
  protected readonly faUser = faUser;
  protected readonly faTag = faTag;
  protected readonly faCheckSquare = faCheckSquare;
  protected readonly faClock = faClock;
  private dialogRef = inject(DialogRef<OutputData>)
  private data = inject(DIALOG_DATA);

  todo: ToDo;

  constructor() {
    this.todo = this.data.todo;
  }

  close() {
    this.dialogRef.close();
  }

  closeWithRta(rta: boolean) {
    this.dialogRef.close({rta});
  }
}
