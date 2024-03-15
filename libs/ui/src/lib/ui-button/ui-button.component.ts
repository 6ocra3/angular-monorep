import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'ui-button',
  templateUrl: './ui-button.component.html',
  styleUrl: './ui-button.component.css',
})
export class UiButtonComponent {
  @Input() clickEvent?: () => void;
  success: boolean = false;

  @Input()
  set successType(val: string | null) {
    this.success = val !== null;
  }
}
