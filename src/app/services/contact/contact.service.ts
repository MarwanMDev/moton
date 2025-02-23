import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';

const BASE_URL = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private client: HttpClient) {}

  createNewContact(contactData: object): Observable<any> {
    return this.client.post(BASE_URL + 'contact', contactData);
  }
}
