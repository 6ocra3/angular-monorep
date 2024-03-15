import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {SharedUiLib} from "@angular-monorepo/shared-ui"
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedUiLib
  ],
  providers: [],
  bootstrap: [AppComponent] // Убедитесь, что AppComponent загружается как корневой компонент
})
export class AppModule { }