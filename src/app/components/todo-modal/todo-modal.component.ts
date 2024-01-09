import { Component, inject } from '@angular/core';
import { DIALOG_DATA, DialogRef } from "@angular/cdk/dialog";
import { BtnComponent } from "../btn/btn.component";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import {
  faBars,
  faCheckSquare,
  faCheckToSlot,
  faClock,
  faClose,
  faTag,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { ToDo } from "../../models/todo.models";

interface InputData {
  todo: ToDo
}

interface OutputData {
  rta: boolean
}

@Component({
  selector: 'app-todo-modal',
  standalone: true,
  imports: [
    BtnComponent,
    FaIconComponent
  ],
  templateUrl: './todo-modal.component.html'
})
export class TodoModalComponent {

  private dialogRef = inject(DialogRef);
  private data = inject(DIALOG_DATA);

  protected readonly faUser = faUser;
  protected readonly faTag = faTag;
  protected readonly faCheckSquare = faCheckSquare;
  protected readonly faClock = faClock;
  protected readonly faClose = faClose;
  protected readonly faCheckToSlot = faCheckToSlot;
  protected readonly faBars = faBars;
  todo: ToDo | null = null;

  constructor() {
    this.todo = this.data.todo;
  }


  close() {
    this.dialogRef.close({
      id: 12,
    });
  }

  closeWithRta(rta: boolean) {
    this.dialogRef.close({rta})
  }

}
