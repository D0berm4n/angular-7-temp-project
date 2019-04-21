import { Component, OnInit } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

export interface Currency {
  value: string;
  viewValue: string;
}

export interface Tags {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-battle-view',
  templateUrl: './battle-view.component.html',
  styleUrls: ['./battle-view.component.css']
})
export class BattleViewComponent implements OnInit {

  currencies: Currency[] = [
    {value: 'usd', viewValue: 'USD'},
    {value: 'euro', viewValue: 'EURO'},
    {value: 'rub', viewValue: 'RUB'}
  ];

  tags: Tags[] = [
    {value: 'tag 1', viewValue: 'tag 1'},
    {value: 'tag 2', viewValue: 'tag 2'},
    {value: 'tag 3', viewValue: 'tag 3'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
