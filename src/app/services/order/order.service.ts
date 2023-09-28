import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';

const BASE_URL = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private client: HttpClient) {}

  getSpecificOrder(id: string): Observable<any> {
    return this.client.get(BASE_URL + `order/${id}`);
  }

  createCashOrder(
    cartId: string,
    orderData: object
  ): Observable<any> {
    return this.client.post(BASE_URL + `order/${cartId}`, orderData);
  }
}
