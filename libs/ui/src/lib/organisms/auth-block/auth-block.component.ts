import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ui-auth-block',
  templateUrl: './auth-block.component.html',
  styleUrls: ['./auth-block.component.scss'],
})
export class UiAuthBlockComponent {
  @Output() submitEvent = new EventEmitter<{login: string, password: string}>();
}
