import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = '';
  date: string = '';
  amount: any;
  targetUnits: string = 'start'
  miles: any ;

  onNameChange(value: string) {
    this.name = value;
  }

  onDateChange(value: string) {
    this.date = value;
  }

  onAmountChange(value: any) {
    this.amount = parseFloat(value);
  }

  onMilesChange(value: any) {
    this.miles = parseFloat(value);
  }

  onChangeKmToMeters() {
    this.targetUnits = 'm';
  }
}
