import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { LocationModel } from '../shared/location.model';
import { LocationService } from '../shared/location.service';

@Component({
  selector: 'app-location-create',
  templateUrl: './location-create.component.html',
  styleUrls: ['./location-create.component.css']
})
export class LocationCreateComponent implements OnInit {
  
  @Input() editModel: LocationModel;
  model=new LocationModel();
  constructor(
    private service: LocationService,
    private modalRef: BsModalRef
  ) { }

  ngOnInit() {
  }

  save(){
    this.service.create(this.model).subscribe(res=>{
      this.service.needUpdateList.next(true);
    })
  }

}
