import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment';

const BASE_URL = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class EventFormService {
  constructor(private client: HttpClient) {}

  submitEventForm(id: string, formData: object): Observable<any> {
    return this.client.post(BASE_URL + `eventform/${id}`, formData);
  }
}
