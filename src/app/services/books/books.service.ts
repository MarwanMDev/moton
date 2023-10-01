import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment';

const BASE_URL = environment.apiURL;

const headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private client: HttpClient) {}

  getAllBooks(): Observable<any> {
    return this.client.get(BASE_URL + `books`);
  }

  GetBookByID(bookId: string): Observable<any> {
    return this.client.get(BASE_URL + `books/${bookId}`);
  }

  search(keywords: string): Observable<any> {
    return this.client.get(BASE_URL + `books/search/${keywords}`);
  }
}
