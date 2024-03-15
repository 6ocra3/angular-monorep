import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedUiComponent } from './shared-ui/shared-ui.component';
import { UiButtonComponent } from './ui-button/ui-button.component';
import { NgClass } from '@angular/common';
@NgModule({
  declarations: [
    SharedUiComponent,
    UiButtonComponent
  ],
  imports: [
    BrowserModule,
    NgClass
  ],
  providers: [],
  bootstrap: [SharedUiComponent, UiButtonComponent],
  exports:
  [
    SharedUiComponent,
    UiButtonComponent
  ] 
})
export class SharedUiLib { }