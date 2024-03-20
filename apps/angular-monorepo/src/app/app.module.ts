import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import {SharedUiLib} from "@angular-monorepo/shared-ui"
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routes';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatSlideToggleModule,
    SharedUiLib,
    PagesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Убедитесь, что AppComponent загружается как корневой компонент
})
export class AppModule { }