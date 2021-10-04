import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RestService } from 'src/app/core/service/rest.service';
import { LocationModel } from './location.model';

@Injectable({
  providedIn: 'root'
})

export class LocationService {

   needUpdateList = new Subject<boolean>();

  constructor(
      private restService: RestService
  ) {
  }

 public getProvince():any{
    return this.restService.get('Province');
  }
  getCity(province: number):any {
    return this.restService.getById('City',province );
  }
  create(model: LocationModel) {
    return this.restService.post('Location', model);
  }

}
