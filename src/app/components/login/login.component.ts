import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserJwtControllerService } from '../../services/user-jwt-controller.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserJwtControllerService]
})

export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';

  constructor(
    private router: Router,
    private userJWTControllerService: UserJwtControllerService
    ) {}

    ngOnInit() {
      // reset login status
      this.userJWTControllerService.logout();
  }

  login() {
    console.log('login')
    this.loading = true;
    this.userJWTControllerService.login('admin', 'admin').subscribe((result) => {
      console.log(result)
  });
  }
}
