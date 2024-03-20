import { Component, Input, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';
import { MatButton } from '@angular/material/button';
type buttonColorType = "" | "primary" | "accent" | "warn"

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class UiButtonComponent{
  @Input() click?: () => void;
  @Input() color: buttonColorType = "";
  @Input() disabled: boolean = false;

}
