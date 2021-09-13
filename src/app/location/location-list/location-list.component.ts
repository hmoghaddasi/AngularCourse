import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LocationService } from '../shared/location.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {
  result: any;
  currentProvinceId:number;
  subscriptions=new Subscription();
  clickCount=0;
  constructor(
    private service: LocationService
  ) { 
    this.getData();
    this.subscriptions = service.needUpdateList.subscribe(res => {
      if (res) {
        this.clickCount++;
      }
    });
  }

  ngOnInit() {
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
  getData() {
    this.service.getProvince().subscribe(result=>{
      this.result=result;
    })
  }
  delete(index){
    this.result.splice(index,1);
  }

}
