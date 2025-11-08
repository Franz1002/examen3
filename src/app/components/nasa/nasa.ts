import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NasaService } from '../../services/nasa';
import { Neo } from '../../models/nasa.model';

@Component({
  selector: 'app-nasa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nasa.html',
  styleUrls: ['./nasa.css']
})
export class NasaComponent implements OnInit {

  asteroids: Neo[] = [];
  loading = true;
  error = '';

  constructor(private nasaNeoService: NasaService) { }

  ngOnInit(): void {
    this.nasaNeoService.getAsteroids().subscribe({
      next: (data) => {
        this.asteroids = data.slice(0, 100); 
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al obtener los asteroides:', err);
        this.error = 'Error al cargar los datos de la NASA.';
        this.loading = false;
      }
    });
  }
  getLatestApproach(asteroid: Neo) {
    return asteroid.close_approach_data?.[0];
  }
}