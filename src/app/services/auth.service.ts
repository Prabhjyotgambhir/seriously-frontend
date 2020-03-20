import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Auth } from '../data-models/auth';
import { appUrl } from '../shared/constant';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public accessToken = 'ac';
  constructor(private httpClient: HttpClient) { }

  get token(): string {
    const getItem = localStorage.getItem(this.accessToken);
    return getItem ? getItem : '';
  }

  set token(token: string) {
    localStorage.setItem(this.accessToken, token);
  }

  signIn(auth: Auth): Observable<any> {
    return this.httpClient.post<any>(appUrl + 'auth/signin', auth);
  }

}
