import {
  AfterContentInit,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {DxDropDownBoxComponent} from 'devextreme-angular';
import {ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => CalculatorComponent),
    }
  ]
})

export class CalculatorComponent implements OnInit, AfterContentInit, ControlValueAccessor {
  waitForSecond = false;
  operator = null;
  firstOperand = null;
  currentChanged = false;
  tempNumber = 0;

  formGroup: FormGroup = new FormGroup({field: new FormControl()});

  // tslint:disable-next-line: variable-name no-input-rename
  @Input('value') value: string;
  @Output() valueChanged: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('dropDownBoxRef', {static: false}) dropDownBox: DxDropDownBoxComponent;

  ngOnInit() {

    this.formGroup.valueChanges.subscribe({
      next: (value: { field: any }): void => {
        if (value.field) {
          this.writeValue(value.field);
        }
        this.valueChanged.next(value.field);
      },
      error: console.log
    });
  }

  ngAfterContentInit() {
    if (this.value) {
      this.formGroup.patchValue({field: this.value}, {emitEvent: false});
    }
  }

  getNumber(num: string) {

    if (!this.waitForSecond) {
      this.setValue((this.value === '0') ? num : this.value + num);
    } else {
      this.setValue(num);
      this.waitForSecond = false;
    }
    this.currentChanged = true;
  }

  getDecimal() {
    if (!this.value.includes('.')) {
      this.setValue(this.value + '.');
      this.currentChanged = true;
      this.waitForSecond = false;
    }
  }

  getOperation(action) {

    if (this.firstOperand === null) {
      this.firstOperand = Number(this.value);

    } else if (this.operator && this.currentChanged) {
      const result = this.doOperation(this.operator);
      this.currentChanged = false;
      this.setValue(String(result));
      this.firstOperand = result;
    }
    this.waitForSecond = true;
    this.operator = action;
  }

  percentCount() {
    this.setValue(String(this.firstOperand * Number(this.value) / 100));
    this.currentChanged = true;
  }

  backspace() {
    (this.value.length === 1) ? this.resetCurrent() : this.setValue(this.value.slice(0, -1));
  }

  clear() {
    this.resetCurrent();
    this.operator = null;
    this.firstOperand = null;
    this.waitForSecond = false;
  }

  getSquare() {
    this.setValue(String(Math.sqrt(Number(this.value))));
    this.currentChanged = true;
  }

  reverseNumber() {
    if (this.value !== '0') {
      this.setValue(this.value.includes('-') ? this.value.slice(1) : '-' + this.value);
      this.currentChanged = true;
    }
  }

  powMinusOne() {
    this.setValue(String(Number(this.value) ** -1));
    this.currentChanged = true;
  }

  memoryStore() {
    this.tempNumber = Number(this.value);
    this.waitForSecond = true;
  }

  memoryRecall() {
    this.setValue(String(this.tempNumber));
    this.waitForSecond = true;
  }

  memoryClear() {
    this.tempNumber = 0;
  }

  memoryPlus() {
    this.tempNumber = Number(this.tempNumber) + Number(this.value);
  }

  memoryMinus() {
    this.tempNumber = Number(this.tempNumber) - Number(this.value);
  }

  private resetCurrent() {
    this.setValue('0');
  }

  private doOperation(action) {
    const second = Number(this.value);

    switch (action) {
      case '+':
        return this.firstOperand + second;
      case '-':
        return this.firstOperand - second;
      case '*':
        return this.firstOperand * second;
      case '/':
        return this.firstOperand / second;
      case '=':
        return second;
    }
  }

  private setValue(inputValue) {
    this.formGroup.setValue({field: inputValue});
  }

  focusOnBox() {
    setTimeout(() => {
      this.dropDownBox.instance.focus();
    });
  }

  /* Catching just '/' keystroke here , as there is no appropriate "keyup" event for it. */
  keyUp(e) {
    if (e.key === '/') {
      this.getOperation('/');
    }
  }

  /* ControlValueAccessor members */

  writeValue(value: any): void {
    this.value = value;
    this.onChange(value);
  }

  onChange: any = () => {
  };

  registerOnChange(fn: () => any): void {
    this.onChange = fn;
  }

  registerOnTouched(): void {
  }

  setDisabledState(): void {
  }
}
