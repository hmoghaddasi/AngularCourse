import { Component, OnInit } from '@angular/core';
import { LocationService } from '../shared/location.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {
  result: any;

  constructor(
    private service: LocationService
  ) { 

    this.getData();

  }

  ngOnInit() {
  }
  getData() {
    debugger;
    this.service.getProvince().subscribe(result=>{
      this.result=result;
    })
  }
  delete(index){
    this.result.splice(index,1);
  }

}
