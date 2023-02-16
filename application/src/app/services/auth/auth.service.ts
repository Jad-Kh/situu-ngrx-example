import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/User';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private url = 'assets/data/auth-response.json';

  constructor(private http: HttpClient) { }

  login(username: string): Observable<{ user: User, token: string }> {
    return this.http.get
        <{ user: User, token: string }>(this.url);
  }

}