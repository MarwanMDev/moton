import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

const BASE_URL = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  [x: string]: any;

  constructor(private client: HttpClient) {}

  public getAllCategories(): Observable<any> {
    return this.client.get<any>(BASE_URL + `categories`);
  }
}
