import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DevExtremeModule} from 'devextreme-angular';


import {AppComponent} from './app.component';
import {CalculatorModule} from './calculator/calculator.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    DevExtremeModule,
    CalculatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule {
}
