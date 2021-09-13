import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { LocationService } from '../shared/location.service';

@Component({
  selector: 'app-city-select',
  templateUrl: './city-select.component.html',
  styleUrls: ['./city-select.component.css']
})
export class CitySelectComponent implements OnInit {

  locations= [];
  @Input() selectedCity: number;
  @Output() selectedCityChange = new EventEmitter<number>();

  @Input() set province(value: number){
    if(value){
      this.getAllCity(value);
    }
  }

  subscriptions = new Subscription();
  constructor(private service: LocationService) {   
   }
 
  ngOnInit() {
  }
  getAllCity(province){
    this.locations=[];
    this.service.getCity(province).subscribe((res) => {
      this.locations = [...this.locations, ...res];
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  selected() {
    this.selectedCityChange.emit(this.selectedCity);
  }
}
