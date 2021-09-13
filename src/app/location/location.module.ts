import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationListComponent } from './location-list/location-list.component';
import { LocationRoutingModule } from './location-routing.module';
import { ProvinceSelectComponent } from './province-select/province-select.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ LocationListComponent, ProvinceSelectComponent],
  imports: [
    CommonModule,
    LocationRoutingModule,
    NgSelectModule,
    FormsModule
  ]
})
export class LocationModule { }
