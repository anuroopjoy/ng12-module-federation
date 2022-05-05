import { Component } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'ng12-module-fed-mat-sel',
  templateUrl: './mat-sel.component.html',
  styleUrls: ['./mat-sel.component.scss'],
})
export class MatSelComponent {
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
  selectedFood = this.foods[2].value;
}
