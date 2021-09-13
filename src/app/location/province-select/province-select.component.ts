import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-province-select',
  templateUrl: './province-select.component.html',
  styleUrls: ['./province-select.component.css']
})
export class ProvinceSelectComponent implements OnInit {
  cars: { id: number; name: string; }[];

  constructor() { }

  selectedCar: number;
  ngOnInit() {
    this.cars = [
        { id: 1, name: 'Volvo' },
        { id: 2, name: 'Saab' },
        { id: 3, name: 'Opel' },
        { id: 4, name: 'Audi' },
    ];
  }

}
