import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventInfoService {

  constructor(private _HttpClient:HttpClient) { }

  getEventInfo():Observable<any>
  {
    return this._HttpClient.get('http://localhost:8000/api/v1/categories')
  }
}
