import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Импортируйте CommonModule
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AtomsUiLib } from '../atoms/atoms.module';
import { MoleculesUiLib } from '../molecules/molecules.module';
import { UiAuthBlockComponent } from './auth-block/auth-block.component';
@NgModule({
  declarations: [
    UiAuthBlockComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AtomsUiLib,
    MoleculesUiLib
  ],
  exports: [
    UiAuthBlockComponent
  ]
})
export class OrganismsUiLib { }