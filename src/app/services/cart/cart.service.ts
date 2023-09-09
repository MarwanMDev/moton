import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartClosedKey = 'cartClosed';
  private cartOpenKey = 'cartOpen';
  constructor(private  _HttpClient:HttpClient) {
  
   }

   isCartClosed(): boolean {
    const value = localStorage.getItem(this.cartClosedKey);
    return value === 'true';
  }
   isCartOpen(): boolean {
    const value = localStorage.getItem(this.cartClosedKey);
    
    return value === 'false';
  }

  setCartClosed(closed: boolean): void {
    localStorage.setItem(this.cartClosedKey, closed.toString());
  }
  

   addToCart():Observable<any>
   {
       return this._HttpClient.get('http://localhost:8000/api/v1/categories')
   }
}
