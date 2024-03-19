import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Импортируйте CommonModule
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AtomsUiLib } from '../atoms/atoms.module';
import {MatInputModule} from '@angular/material/input';
import { UiAuthFormComponent } from './auth-form/auth-form.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    UiAuthFormComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    AtomsUiLib,
    MatInputModule,
    FormsModule
  ],
  exports: [
    UiAuthFormComponent,
  ]
})
export class MoleculesUiLib { }