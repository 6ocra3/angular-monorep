import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SharedUiLib } from '@angular-monorepo/shared-ui';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    AuthPageComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    SharedUiLib,
    MatIconModule
  ],
  exports:[
    AuthPageComponent,
    MainPageComponent,
  ],
  providers: [],
})
export class PagesModule { }