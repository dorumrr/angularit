import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { tap, map } from 'rxjs/operators';

@Injectable()
export class HttpLogInterceptor implements HttpInterceptor {

  window: any = window; // provide access to window property

  constructor(
    private router: Router
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('Interceptor in place. Added a header Token: just a demo token');

    request = request.clone({
      setHeaders: { Token: 'just a demo token' }
    });

    return next.handle(request);

  }

}
