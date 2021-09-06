import { Injectable } from '@angular/core';
import { RestService } from 'src/app/core/service/rest.service';

@Injectable({
  providedIn: 'root'
})

export class LocationService {

  constructor(
      private restService: RestService
  ) {
  }

 public getProvince():any{
    return this.restService.get('Province');
  }

}