import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Импортируйте CommonModule
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AtomsUiLib } from '../atoms/atoms.module';
import {MatInputModule} from '@angular/material/input';
import { UiAuthFormComponent } from './auth-form/auth-form.component';
import { FormsModule } from '@angular/forms';
import { UiNavBarComponent } from './nav-bar/nav-bar.component';
@NgModule({
  declarations: [
    UiAuthFormComponent,
    UiNavBarComponent
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
    UiNavBarComponent
  ]
})
export class MoleculesUiLib { }