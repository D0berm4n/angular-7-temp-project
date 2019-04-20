import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

import { UserJwtController } from '../interfaces/user-jwt-controller'

@Injectable({
    providedIn: 'root',
  })
  
  export class UserJwtControllerService {
    public token: string;

    constructor(private http: HttpClient) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): Observable<any> {
        return this.http.post(environment.apiURL + '/api/authenticate', { username: username, password: password })
          .pipe(map((response: UserJwtController) => {
              return response.id_token;
            })
          )
    }
}
