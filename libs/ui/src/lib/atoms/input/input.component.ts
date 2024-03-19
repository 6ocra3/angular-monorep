import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
type inputTypes = "password" | "date" | "email" | "number" | ""

@Component({
    selector: 'ui-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => UiInputComponent),
        multi: true
      }
    ]
  })
export class UiInputComponent {
    @Input() placeholder:string = "";
    @Input() value:string = "";
    @Input() inputType: inputTypes = "";

    onChange: any = () => {};
    onTouched: any = () => {};
  
    writeValue(value: any): void {
      this.value = value;
    }
  
    registerOnChange(fn: any): void {
      this.onChange = fn;
    }
  
    registerOnTouched(fn: any): void {
      this.onTouched = fn;
    }
  
    updateValue(event: Event) {
        const target = event.target as HTMLInputElement; // Явно указываем, что target имеет тип HTMLInputElement
        this.value = target.value;
        this.onChange(target.value);
        this.onTouched();
      }
}
