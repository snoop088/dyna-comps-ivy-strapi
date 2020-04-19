import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';

export interface LoggedUser {
  user: {
    confirmed: boolean,
    blocked: boolean,
    email: string,
    id: string | number,
    role: any,
    username: string
  };
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginApi = 'http://dogg:1337/auth/local';
  private registerApi = 'http://dogg:1337/auth/local/register';
  private redir = '';
  constructor(
    private auth: HttpClient
  ) { }
  set redirUrl(val) {
    this.redir = val ? val : '';
  }
  public login(user: { username: string, password: string }): Observable<any> {
    return this.auth.post(this.loginApi, {
      identifier: user.username,
      password: user.password
    }).pipe(
      tap(res => this.setSession(res)),
      shareReplay()
    );
  }
  public logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }
  public getLogged(): LoggedUser {
    return {
      user: JSON.parse(localStorage.getItem('user')),
      token: localStorage.getItem('token')
    };
  }

  private setSession(authResult) {
    localStorage.setItem('user', JSON.stringify(authResult.user));
    localStorage.setItem('token', authResult.jwt);
  }
}
