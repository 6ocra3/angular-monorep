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
import { UiNavItemComponent } from './nav-item/nav-item.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { UiTableComponent } from './table/table.component';
import { MatPaginator } from '@angular/material/paginator';
@NgModule({
  declarations: [
    UiButtonComponent,
    UiInputComponent,
    UiLabelComponent,
    UiFormFieldComponent,
    UiLoaderComponent,
    UiNavItemComponent,
    UiTableComponent

  ],
  imports: [
    CommonModule, // Используйте CommonModule для директив
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    RouterModule,
    MatTableModule,
    MatPaginator
  ],
  exports: [
    UiButtonComponent,
    UiInputComponent,
    UiLabelComponent,
    UiFormFieldComponent,
    UiLoaderComponent,
    UiNavItemComponent,
    UiTableComponent,
  ]
})
export class AtomsUiLib { }