import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OpenLibraryBook } from '../models/openlibrary.model';

@Injectable({
  providedIn: 'root'
})
export class OpenLibraryService {

  private apiUrl = 'https://openlibrary.org/search.json?q=harry+potter';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<OpenLibraryBook[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(res => res.docs.slice(0, 12)) 
    );
  }
}