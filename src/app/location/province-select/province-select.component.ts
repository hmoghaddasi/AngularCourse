import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { LocationService } from '../shared/location.service';

@Component({
  selector: 'app-province-select',
  templateUrl: './province-select.component.html',
  styleUrls: ['./province-select.component.css']
})
export class ProvinceSelectComponent implements OnInit {
  locations= [];
  @Input() selectedProvince: number;
  @Output() selectedProvinceChange = new EventEmitter<number>();
  subscriptions = new Subscription();
  constructor(private service: LocationService) { }
 
  ngOnInit() {
   this.getAll();
  }
  getAll(){
    this.locations=[];
    this.service.getProvince().subscribe((res) => {
      this.locations = [...this.locations, ...res];
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  selected() {
    this.selectedProvinceChange.emit(this.selectedProvince);
    // this.service.needCityUpdate.next(this.selectedProvince);
  }
}
