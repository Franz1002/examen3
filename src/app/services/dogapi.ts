import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface DogResponse {
  message: string; 
  status: string;
}

@Injectable({
  providedIn: 'root',
})

export class DogapiService {
  private apiUrl = 'https://dog.ceo/api/breeds/image/random';

  constructor(private http: HttpClient) { }

  getRandomDog(): Observable<DogResponse> {
    return this.http.get<DogResponse>(this.apiUrl);
  }
}