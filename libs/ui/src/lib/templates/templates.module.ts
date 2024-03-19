import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Импортируйте CommonModule
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AtomsUiLib } from '../atoms/atoms.module';
import { MoleculesUiLib } from '../molecules/molecules.module';
import { UiAuthTemplateComponent } from './auth-template/auth-template.component';
import { OrganismsUiLib } from '../organisms/organisms.module';
@NgModule({
  declarations: [
    UiAuthTemplateComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AtomsUiLib,
    MoleculesUiLib,
    OrganismsUiLib
  ],
  exports: [
    UiAuthTemplateComponent
  ]
})
export class TemplatesUiLib { }