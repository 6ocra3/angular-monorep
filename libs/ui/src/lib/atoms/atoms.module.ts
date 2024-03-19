import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Импортируйте CommonModule
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiButtonComponent } from './button/button.component';
import { UiInputComponent } from './input/input.component';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UiLabelComponent } from './label/label.component';
import { UiFormFieldComponent } from './form-field/form-field.component';
import { UiLoaderComponent } from './loader/loader.component';
@NgModule({
  declarations: [
    UiButtonComponent,
    UiInputComponent,
    UiLabelComponent,
    UiFormFieldComponent,
    UiLoaderComponent
  ],
  imports: [
    CommonModule, // Используйте CommonModule для директив
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  exports: [
    UiButtonComponent,
    UiInputComponent,
    UiLabelComponent,
    UiFormFieldComponent,
    UiLoaderComponent
  ]
})
export class AtomsUiLib { }