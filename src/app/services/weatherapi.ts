import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { WeatherData } from '../models/weatherapi.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherapiService {
  private baseUrl = 'https://api.open-meteo.com/v1/forecast?current_weather=true';

  private departments = [
    { name: 'La Paz', lat: -16.5, lon: -68.15 },
    { name: 'Cochabamba', lat: -17.38, lon: -66.16 },
    { name: 'Santa Cruz', lat: -17.8, lon: -63.17 },
    { name: 'Oruro', lat: -17.97, lon: -67.11 },
    { name: 'Potosí', lat: -19.58, lon: -65.75 },
    { name: 'Chuquisaca', lat: -19.03, lon: -65.26 },
    { name: 'Tarija', lat: -21.53, lon: -64.73 },
    { name: 'Beni', lat: -14.83, lon: -64.9 },
    { name: 'Pando', lat: -11.02, lon: -68.77 },
  ];

  constructor(private http: HttpClient) { }

  getWeatherForAllDepartments(): Observable<WeatherData[]> {
    const requests = this.departments.map((dep) =>
      this.http
        .get<any>(`${this.baseUrl}&latitude=${dep.lat}&longitude=${dep.lon}`)
        .pipe(
          map((res) => ({
            department: dep.name,
            temperature: res.current_weather?.temperature,
            windspeed: res.current_weather?.windspeed,
            weathercode: res.current_weather?.weathercode,
            time: res.current_weather?.time,
          }))
        )
    );

    return forkJoin(requests);
  }
}