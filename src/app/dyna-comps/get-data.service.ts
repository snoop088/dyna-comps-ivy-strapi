import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor() { }
  public getData(): Observable<any> {
    return of(
      { name: 'Pesho', age: 42 },
      { name: 'Suzie', age: 24 },
      { name: 'Jonnie', age: 31 },
    );
  }
}
