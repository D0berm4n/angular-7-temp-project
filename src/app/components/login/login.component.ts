import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { UserJwtControllerService } from '../../services/user-jwt-controller.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserJwtControllerService]
})

export class LoginComponent implements OnInit {

  formGroup: FormGroup;

  constructor (
    private router: Router,
    private userJWTControllerService: UserJwtControllerService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required],
    });
  }

  getError(el) {
    switch (el) {
      case 'user':
        if (this.formGroup.get('username').hasError('required')) {
          return 'Username required';
        }
        break;
      case 'pass':
        if (this.formGroup.get('password').hasError('required')) {
          return 'Password required';
        }
        break;
      default:
        return '';
    }
  }

  onSubmit(post) {
    this.userJWTControllerService.login(this.formGroup.get('username').value, this.formGroup.get('password').value)
      .subscribe((result) => {
        if (result) {
          localStorage.setItem('token', result);
          this.router.navigate(['/battles']);
        }
    });
  }
}
