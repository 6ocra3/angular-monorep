import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AtomsUiLib } from './atoms/atoms.module';
import { MoleculesUiLib } from './molecules/molecules.module';
import { OrganismsUiLib } from './organisms/organisms.module';
import { TemplatesUiLib } from './templates/templates.module';
@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MatButtonModule,
    BrowserAnimationsModule,
    AtomsUiLib, 
    MoleculesUiLib,
    OrganismsUiLib,
    TemplatesUiLib
  ],
  providers: [],
  exports: [
    AtomsUiLib,
    MoleculesUiLib,
    OrganismsUiLib,
    TemplatesUiLib
  ]
})
export class SharedUiLib { }