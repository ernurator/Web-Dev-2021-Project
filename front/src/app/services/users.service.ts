import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';
import {AuthToken} from '../models/auth.token';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  BASE_URL = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {
  }

  getProfile(id: number): Observable<User> {
    return this.http.get<User>(`${this.BASE_URL}/profile/${id}/`);
  }

  login(username: string, password: string): Observable<AuthToken> {
    return this.http.post<AuthToken>(`${this.BASE_URL}/login/`, {
      username,
      password,
    });
  }

  // TODO add registration
  register(username: string, password: string, email: string): Observable<AuthToken> {
    throw new Error('Not implemented');
    // return this.http.post<AuthToken>()
  }
}
