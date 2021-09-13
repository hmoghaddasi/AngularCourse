import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RestService } from 'src/app/core/service/rest.service';

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

}
