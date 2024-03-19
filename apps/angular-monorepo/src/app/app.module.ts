import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import {SharedUiLib} from "@angular-monorepo/shared-ui"
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatSlideToggleModule,
    SharedUiLib
  ],
  providers: [],
  bootstrap: [AppComponent] // Убедитесь, что AppComponent загружается как корневой компонент
})
export class AppModule { }