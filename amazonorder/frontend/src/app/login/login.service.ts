import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { catchError, map, throwError } from 'rxjs';
import { urlConstant } from '../constant/urlconstat';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(public http: HttpClient) {}

  login(data: User) {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
      }),
    };

    return this.http
      .post(urlConstant.loginModule.LoggedIn, JSON.stringify(data), httpOptions)

      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
