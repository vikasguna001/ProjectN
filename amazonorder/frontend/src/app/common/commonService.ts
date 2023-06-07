import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  //public loginUser = localStorage.getItem('loginUser');
  public config = {};
  public userData: any = {};
  public loading: any;

  constructor(
    public http: HttpClient,
    private toastr: ToastrService,
    public router: Router,
    public spinner: NgxSpinnerService
  ) {}

  private prepareHeader(headers: HttpHeaders | null): object {
    headers = headers || new HttpHeaders();

    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Accept', 'application/json');

    return {
      headers: headers,
    };
  }

  private prepareHeaderFormData(headers: HttpHeaders | null): object {
    headers = headers || new HttpHeaders();

    headers = headers.set('Content-Type', 'multipart/form-data');
    headers = headers.set('Accept', 'application/json');

    return {
      headers: headers,
    };
  }

  get<T>(url: string, headers: HttpHeaders | null): Observable<T> {
    const expandedHeaders = this.prepareHeader(headers);
    return this.http.get<T>(url, expandedHeaders);
  }

  post(url: string, body: any, headers: HttpHeaders | null): Observable<any> {
    const expandedHeaders = this.prepareHeader(headers);
    return this.http.post(url, body, expandedHeaders);
  }

  postFormData(
    url: string,
    body: any,
    headers: HttpHeaders | null
  ): Observable<any> {
    const expandedHeaders = this.prepareHeaderFormData(headers);
    return this.http.post(url, body, expandedHeaders);
  }

  public toastSuccessMsg(title: any, message: any, timeOut?: object) {
    this.toastr.success(title, message, timeOut);
  }

  public toastErrorMsg(title: any, message: any, timeOut?: object) {
    this.toastr.error(title, message, timeOut);
  }

  public toastWarningMsg(title: any, message: any, timeOut?: object) {
    this.toastr.warning(title, message, timeOut);
  }

  //show loader
  public showLoading() {
    this.spinner.show();
  }

  //Hide loader
  public hideLoading() {
    setTimeout(() => {
      /// spinner ends after 5 seconds
      this.spinner.hide();
    }, 100);
  }
}
