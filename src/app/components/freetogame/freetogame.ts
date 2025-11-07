import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FreetogameService } from '../../services/freetogame';

import { Game } from '../../models/freetogame.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-freetogame',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './freetogame.html',
  styleUrls: ['./freetogame.css'],
})
export class FreetogameComponent implements OnInit {

  games: Game[] = [];
  loading = true;
  error = '';

  constructor(private freetogameService: FreetogameService) { }

  ngOnInit(): void {
    this.freetogameService.getGames().subscribe({
      next: (data) => {
        this.games = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al obtener los juegos:', err);
        this.error = 'Error al cargar los juegos.';
        this.loading = false;
      }
    });
  }
}
