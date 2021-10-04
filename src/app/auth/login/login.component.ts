import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { LoginModel } from '../shared/login.model';
import { Subscription } from 'rxjs';
import { StorageService } from 'src/app/core/service/storage.service';
// import { AuthorizationService } from '../../core/services/authorization.service';
// import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model = new LoginModel();
  loading = false;
  subscription = new Subscription();
  statusId: number;
  showPassword = false;

  constructor(
    private service: AuthService,
    private storageService: StorageService
    ) {
  }

  ngOnInit() {
  }

  login() {
    this.service.login(this.model).subscribe(result => {
      this.storageService.store('token',result.Token);
      window.location.href = './location-list';
    }, err => {
      
    });
  }
}
