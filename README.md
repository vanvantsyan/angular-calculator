# Calculator

The project represents the calculator module being used in app component. 
You can take just calculator module to your project and use it following way.
 
Angular CLI version : 8.3.21.


## How to use calculator module as a library

### Step 1

Import library to your application:

```typescript
import { CalculatorModule } from 'fc-web-library/calculator';

@ngModule({
    imports: [CalculatorModule]
});
```

### Step 2
### Add styles to angular.json

 ``` json
"styles": [
    "node_modules/devextreme/dist/css/dx.common.css",
    "node_modules/devextreme/dist/css/dx.light.css",
    ...
]
```

## Usage
### You can use either as simple html element or as form control

#### The Value attribute is optional for simple html element.
```html
<app-calculator value="100"></app-calculator>
<app-calculator></app-calculator>
```
#### The formControlName attribute is required when using in a form group.
```html
<form [formGroup]="formGroup">
  <app-calculator formControlName="calculator"></app-calculator>
</form>
```

## Parameters

|  name  |  value type  |  description  |
|  :---  |   :-----:    |  :----------  |
| value | String       | Provides value in starting point to calculator.The default value is 0. |
