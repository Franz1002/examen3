import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FbiWanted } from '../models/fbi.model';

@Injectable({
  providedIn: 'root'
})
export class FbiService {

  private apiUrl = 'https://api.fbi.gov/wanted/v1/list';

  constructor(private http: HttpClient) { }

  getWanted(): Observable<FbiWanted[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(res => res.items) // el array está dentro de 'items'
    );
  }
}