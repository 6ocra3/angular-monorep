import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ui-auth-template',
  templateUrl: './auth-template.component.html',
  styleUrls: ['./auth-template.component.scss'], // исправление опечатки
})
export class UiAuthTemplateComponent {
  @Output() submitEvent = new EventEmitter<{login: string, password: string}>();
}
