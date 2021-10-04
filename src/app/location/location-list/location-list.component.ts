import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LocationCreateComponent } from '../location-create/location-create.component';
import { LocationService } from '../shared/location.service';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {
  result: any;
  currentProvinceId:number;
  currentCityId:number;
  subscriptions=new Subscription();
  clickCount=0;
  
  modalRef: BsModalRef;
  constructor(
    private service: LocationService,
    private modalService: BsModalService
  ) { 
    this.getData();
    this.subscriptions = service.needUpdateList.subscribe(res => {
      if (res) {
        // this.clickCount++;
        this.getData();
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
create(){
  const config: ModalOptions = {
    initialState: {
      editModel: null
    },
    class: 'modal-width-medium',
  };
  this.modalRef = this.modalService.show(LocationCreateComponent, config);
}

edit(model){
  const config: ModalOptions = {
    initialState: {
      editModel: model
    },
    class: 'modal-width-medium',
  };
  this.modalRef = this.modalService.show(LocationCreateComponent, config);
}

}
