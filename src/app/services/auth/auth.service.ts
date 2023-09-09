import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userdata = null;

  constructor(private _hclient :HttpClient) { }

  decodeUserData(){
    let enCodedToken = JSON.stringify( localStorage.getItem('userToken'));
    let deCodedToken:any = jwtDecode(enCodedToken);
    console.log(deCodedToken);
    this.userdata = deCodedToken;
    
  }

  login(user_data:object):Observable<any>
  {
    return this._hclient.post('http://localhost:8000/api/v1/auth/login' , user_data )
  }
}