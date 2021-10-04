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
  editMode: boolean;
  constructor(
    private service: LocationService,
    private modalRef: BsModalRef
  ) { }

  ngOnInit() {
    if(this.editModel){
      this.model=this.editModel;
      this.editMode=true;
    }
  }

  save(){
    if(!this.editMode){
      this.service.create(this.model).subscribe(res=>{
        this.service.needUpdateList.next(true);
        this.modalRef.hide();
      })
    }else{
      this.service.edit(this.model).subscribe(res=>{
        this.service.needUpdateList.next(true);
        this.modalRef.hide();
      })
    }
  
  }

}
