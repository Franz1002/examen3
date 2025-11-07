import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../models/freetogame.model';

@Injectable({
  providedIn: 'root'
})
export class FreetogameService {

  private apiUrl = 'https://free-to-play-games-database.p.rapidapi.com/api/games';

  private headers = new HttpHeaders({
    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
    'x-rapidapi-key': '76959d3b09mshe9198ea9ffdd35dp18a834jsn56ac9b65eecc'
  });

  constructor(private http: HttpClient) {}

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.apiUrl, { headers: this.headers });
  }

  getGameById(id: number): Observable<Game> {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    return this.http.get<Game>(url, { headers: this.headers });
  }
}
