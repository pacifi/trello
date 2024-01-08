import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";
import { Column, ToDo } from "../../models/todo.models";

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [
    NavbarComponent,
    CdkDrag,
    CdkDropList,
    CdkDropListGroup
  ],
  templateUrl: './board.component.html',
  styles: [
    `
      .cdk-drop-list-dragging .cdk-drag {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }

      .cdk-drag-animating {
        transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
      }
    `
  ]
})
export class BoardComponent {

  columns: Column[] = [
    {
      title: 'Todo',
      todos: [
        {
          id: "1",
          title: "make Dishes"
        },
        {
          id: "2",
          title: "Buy a unicorn"
        },
      ]
    },
    {
      title: 'Doing',
      todos: [
        {
          id: "3",
          title: "Whatch angular path in platzi"
        },
      ]
    },
    {
      title: 'Done',
      todos: [
        {
          id: "4",
          title: "Play video games"
        },
      ]
    }
  ]

  todos: ToDo[] = []

  doing: ToDo[] = []

  done: ToDo[] = []

  drop(event: CdkDragDrop<ToDo[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex)
    }


  }

  addColumn() {
    this.columns.push({
      title: ' New Column',
      todos: []
    });
  }
}
