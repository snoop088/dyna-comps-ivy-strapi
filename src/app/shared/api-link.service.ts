import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiLinkService<T> {

  private _apiUrl = '';

  constructor(private http: HttpClient) { }
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
}
