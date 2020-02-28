import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxDropDownBoxModule, DxTextBoxModule} from 'devextreme-angular';
import {CalculatorComponent} from './calculator.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    CalculatorComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    DxDropDownBoxModule,
    DxTextBoxModule,
  ],
  exports: [
    CalculatorComponent
  ]
})
export class CalculatorModule { }
