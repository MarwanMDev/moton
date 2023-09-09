import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = "https://c35b-197-134-77-17.ngrok.io/api/v1/";

  constructor(private http: HttpClient) { }

  get(param: string): Observable<any> {
    return this.http.get(this.url + param)
  }

}
