import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AddCatService {

  constructor(private _hclient :HttpClient) { }

  headers:any={
    Authorization: 'Bearer ' + localStorage.getItem('userToken')
  }

  Add_Cat(cat_data:object):Observable<any>

  {
    
    return this._hclient.post('http://localhost:8000/api/v1/categories' , cat_data , 
       {headers:this.headers}
     )
  }
}
