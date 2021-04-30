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

  getProfile(): Observable<User> {
    return this.http.get<User>(`${this.BASE_URL}/profile/`);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.BASE_URL}/profile/`, user);
  }

  login(username: string, password: string): Observable<AuthToken> {
    return this.http.post<AuthToken>(`${this.BASE_URL}/login/`, {
      username,
      password,
    });
  }

  register(username: string, firstname: string, lastname: string,
           password: string, email: string): Observable<AuthToken> {
    return this.http.post<AuthToken>(`${this.BASE_URL}/register/`, {
      username,
      email,
      password,
      first_name: firstname,
      last_name: lastname,
    });
  }
}
