import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';

  formGroup = new FormGroup({
    calculator: new FormControl('0')
  });

  constructor() {
    this.formGroup.valueChanges.subscribe((data) => {
      console.log('data: ', data);
    });
  }

}
