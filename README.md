# Calculator

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

## How to Use

### Add styles to angular.json

 ``` json
"styles": [
    "node_modules/devextreme/dist/css/dx.common.css",
    "node_modules/devextreme/dist/css/dx.light.css",
    ...
]
```

### You can use either as simple html element or as form control

#### The Value attribute is optional for simple html element.
```html
<app-calculator value="0"></app-calculator>
<app-calculator></app-calculator>
```
#### The formControlName attribute is required when using in a form group.
```html
<form [formGroup]="formGroup">
  <app-calculator formControlName="calculator"></app-calculator>
</form>
```
