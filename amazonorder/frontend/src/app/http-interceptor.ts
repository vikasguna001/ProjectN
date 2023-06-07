import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpResponse } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import { SpinnerService } from './spinner.service';
import { Observable, throwError, empty } from 'rxjs';
import { catchError, tap, map, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CommonService } from './common/commonService';
import { messageConstant } from './constant/messageConstant';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  constructor(private _router: Router, private _commonService: CommonService) { }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    let access_token: any = localStorage.getItem('token');

    if (access_token) {
      access_token = access_token.replace(/"/g, '');
      request = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${access_token}`),
      });
    }
    if (!request.headers.has('content-type')) {
      request.headers.set('content-type', 'application/json');
      request.headers.set('accept', 'application/json, text/plain, */*');
    }
    return next.handle(request).pipe(
      map((event) => {
        //this._commonService.showLoading();
        return event;
      }),
      catchError((err) => {
        this._commonService.hideLoading();
        if (err.status === 401) {
          localStorage.removeItem('loginUser');
          this._router.navigate(['/login']);
          return empty();
        } else if (err.status === 500) {
          this._commonService.toastErrorMsg(
            null,
            messageConstant.Common.UnAuthorized
          );
          return throwError(err);
        } else return throwError(err);
      }),
      finalize(() => {
        //this._commonService.hideLoading();
      })
    );
  }
}
