import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogapiService } from '../../services/dogapi';  

@Component({
  selector: 'app-dogapi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dogapi.html',
  styleUrls: ['./dogapi.css']
})
export class DogapiComponent implements OnInit {
  imageUrl = '';
  loading = true;
  error = '';

  constructor(private dogapiService: DogapiService) { }

  ngOnInit(): void {
    this.loadDog();
  }

  loadDog(): void {
    this.loading = true;
    this.error = '';

    this.dogapiService.getRandomDog().subscribe({
      next: (response) => {
        this.imageUrl = response.message;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al cargar la imagen:', err);
        this.error = 'Error al cargar la imagen.';
        this.loading = false;
      }
    });
  }
}