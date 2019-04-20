import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm} from '@angular/forms';

import { UserJwtControllerService } from '../../services/user-jwt-controller.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserJwtControllerService]
})

export class LoginComponent implements OnInit {
  credentials: any = {};
  loading = false;
  error = '';

  constructor (
    private router: Router,
    private userJWTControllerService: UserJwtControllerService
  ) {}

  ngOnInit() {}

  onSubmit(form: NgForm){
    console.log(form);
}

  login(username, password) {
    console.log(username, password)
    // this.loading = true;
    this.userJWTControllerService.login('admin', 'admin')
      .subscribe((result) => {
        console.log('result')
        console.log(result)
    });
  }
}
