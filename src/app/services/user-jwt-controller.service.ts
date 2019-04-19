import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class UserJwtControllerService {
    public token: string;

    constructor(private http: HttpClient) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): Observable<boolean> {
        return this.http.post(environment.apiURL + '/api/authenticate', { username: username, password: password })
          .pipe(
            map((response: any) => {
              let token = response.id_token;
                if (token) {
                    this.token = token;

                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

                    return true;
                } else {
                    return false;
                }
            })
          )
    }

    logout(): void {
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}
