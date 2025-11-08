import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherapiService } from '../../services/weatherapi';
import { WeatherData } from '../../models/weatherapi.model';

@Component({
  selector: 'app-weatherapi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weatherapi.html',
  styleUrls: ['./weatherapi.css']
})
export class WeatherapiComponent implements OnInit {
  weathers: WeatherData[] = [];
  loading = true;
  error = '';

  constructor(private weatherService: WeatherapiService) { }

  ngOnInit(): void {
    this.weatherService.getWeatherForAllDepartments().subscribe({
      next: (data) => {
        this.weathers = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.error = 'Error al obtener datos del clima.';
        this.loading = false;
      }
    });
  }
}