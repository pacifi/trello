import { Component, Input } from '@angular/core';
import { NgClass } from "@angular/common";


@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [
    NgClass

  ],
  templateUrl: './btn.component.html'
})
export class BtnComponent {

  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
  @Input() color: 'success' | 'primary' | 'danger' | 'light' | 'sky' = 'primary';

  mapColors = {
    success: {
      'text-white': true,
      'bg-success-700': true,
      'hover:bg-success-800': true,
      'focus:ring-success-300': true,
    },
    primary: {
      'text-white': true,
      'bg-primary-700': true,
      'hover:bg-primary-800': true,
      'focus:ring-primary-300': true,
    }
    ,
    danger:
      {
        'bg-danger-700': true,
        'hover:bg-danger-800': true,
        'focus:ring-danger-300': true,
        'text-white': true,
      },
    light: {
      'bg-grey-200': true,
      'hover:bg-grey-500': true,
      'focus:ring-grey-50': true,
      'text-gray-700': true

    },
    sky: {
      'bg-sky-700': true,
      'hover:bg-sky-800': true,
      'focus:ring-sky-300': true,
      'text-gray-700': true
    }
  }

  get colors() {
    const colors = this.mapColors[this.color];
    if (colors) {
      return colors
    }
    return {};
  }
}
