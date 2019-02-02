import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ApisService {

  constructor(
    private http: HttpClient
  ) { }

  getTypicodePosts(endpoint: String, data: Object): Observable<any> {
    return this.http.get<any[]>(environment.apis.typicode + endpoint, data).pipe(
      tap(t => {
        t.forEach(e => {
          e.aaaaa = 'bbbbb';
        });
      })
    );
  }



}
