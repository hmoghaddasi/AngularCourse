import { Component, OnInit } from '@angular/core';
import { LocationService } from '../shared/location.service';

@Component({
  selector: 'app-location-create',
  templateUrl: './location-create.component.html',
  styleUrls: ['./location-create.component.css']
})
export class LocationCreateComponent implements OnInit {

  constructor(
    private service: LocationService
  ) { }

  ngOnInit() {
  }

  save(){
    this.service.needUpdateList.next(true);
  }

}
