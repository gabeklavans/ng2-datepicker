import { Component } from '@angular/core';
import {DatepickerOptions} from '../ng-datepicker/component/ng-datepicker.component';
import en from 'date-fns/locale/en-US';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date: Date;
  options: DatepickerOptions = {
    locale: en,
  };
  constructor() {
    this.date = new Date();
  }
}
