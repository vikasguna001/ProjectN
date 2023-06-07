import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../config/constants';

@Injectable()
export class ApiService {
   
    constans = new Constants();
    constructor(private http: HttpClient) { }
    getcomments(): Observable<any> {
        return this.http.get(this.constans.DIOR_ENDPOINT);
    }
}