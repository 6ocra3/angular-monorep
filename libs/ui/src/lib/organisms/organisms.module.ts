import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Импортируйте CommonModule
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AtomsUiLib } from '../atoms/atoms.module';
import { MoleculesUiLib } from '../molecules/molecules.module';
import { UiAuthBlockComponent } from './auth-block/auth-block.component';
import { UiAsideBlockComponent } from './aside-block/aside-block.component';
import {MatIconModule} from '@angular/material/icon';
import { UiHeaderBlockComponent } from './header-block/header-block.component';
import { UiContentBlockComponent } from './content-block/content-block.component';
@NgModule({
  declarations: [
    UiAuthBlockComponent,
    UiAsideBlockComponent,
    UiHeaderBlockComponent,
    UiContentBlockComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AtomsUiLib,
    MoleculesUiLib,
    MatIconModule
  ],
  exports: [
    UiAuthBlockComponent,
    UiAsideBlockComponent,
    UiHeaderBlockComponent,
    UiContentBlockComponent
  ]
})
export class OrganismsUiLib { }