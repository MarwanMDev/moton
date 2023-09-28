import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment';

const BASE_URL = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private client: HttpClient) {}

  getAllEvents(): Observable<any> {
    return this.client.get(BASE_URL + 'events');
  }

  getSpecificEvent(id: string): Observable<any> {
    return this.client.get(BASE_URL + `events/${id}`);
  }
}
