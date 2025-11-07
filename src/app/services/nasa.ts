import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Neo } from '../models/nasa.model';
@Injectable({
  providedIn: 'root'
})
export class NasaService {

  private apiUrl = 'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=nSjWQe4d1ghe906uQT9rEG9cxaMjI7rBfK9tLrEN';

  constructor(private http: HttpClient) { }

  getAsteroids(): Observable<Neo[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(res => res.near_earth_objects) // extrae el arreglo del JSON
    );
  }
}