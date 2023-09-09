import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewService {

  constructor(private _HttpClient:HttpClient) { }

  getNews():Observable<any>
  {
      return this._HttpClient.get('http://localhost:8000/api/v1/categories')
  }

  delete_specialData(iid:string):Observable<any>{
    return this._HttpClient.delete('http://localhost:8000/api/v1/categories/'+iid)
  }
delete_allData():Observable<any>{
  return this._HttpClient.delete('http://localhost:8000/api/v1/categories')
  }
}
