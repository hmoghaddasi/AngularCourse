import { Injectable } from '@angular/core';
import { LoginModel } from './login.model';
import { Observable } from 'rxjs';
import { RestService } from 'src/app/core/service/rest.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private restService: RestService) { }

  public login(model: LoginModel): Observable<any> {
    return this.restService.post('token', model);
  }
  
}
