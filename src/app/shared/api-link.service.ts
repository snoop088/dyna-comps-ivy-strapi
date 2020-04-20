import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiLinkService<T> {

  private _apiUrl = '';
  private t = '';
  private header = {};

  constructor(private http: HttpClient, private auth: AuthService) {
    this.t = this.auth.getLogged().token;
    this.header = new HttpHeaders().set('Authorization', 'Bearer ' + this.t);
  }
  set apiUrl(value: string) {
    value ? this._apiUrl = value : this._apiUrl = '';
  }
  public getList(accessor?: string): Observable<T[]> {
    if (this._apiUrl) {
      return this.http.get<T>(this._apiUrl).pipe(
        map(result => accessor ? result[accessor] : result)
      );
    } else {
      return of(null);
    }
  }
  public createItem(item: T): Observable<T> {
    if (this._apiUrl) {
      return this.http.post<T>(this._apiUrl, item, { headers: this.header }).pipe(tap (result => console.log(result)));
    } else {
      return of(null);
    }
  }
}
