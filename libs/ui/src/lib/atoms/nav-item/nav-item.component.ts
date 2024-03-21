import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.scss',
})
export class UiNavItemComponent{
    @Input() path: string;
}
