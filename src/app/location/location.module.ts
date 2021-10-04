import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationListComponent } from './location-list/location-list.component';
import { LocationRoutingModule } from './location-routing.module';
import { ProvinceSelectComponent } from './province-select/province-select.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { LocationCreateComponent } from './location-create/location-create.component';
import { CitySelectComponent } from './city-select/city-select.component';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [ LocationListComponent, ProvinceSelectComponent, LocationCreateComponent, CitySelectComponent],
  imports: [
    CommonModule,
    LocationRoutingModule,
    NgSelectModule,
    FormsModule,    
    ModalModule.forChild(),
  ],
  exports:[
    LocationCreateComponent
  ],
  entryComponents:[
    LocationCreateComponent
  ]
})
export class LocationModule { }
