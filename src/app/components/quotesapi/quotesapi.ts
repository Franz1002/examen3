import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotesapiService } from '../../services/quotesapi';
import { Quote } from '../../models/quotesapi.model';

@Component({
  selector: 'app-quotesapi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quotesapi.html',
  styleUrls: ['./quotesapi.css']
})
export class QuotesapiComponent implements OnInit {
  quote?: Quote;
  loading = false;
  error = '';

  constructor(private quotesService: QuotesapiService) {}

  ngOnInit(): void {
    this.loadQuote();
  }

  loadQuote(): void {
    this.loading = true;
    this.error = '';
    this.quotesService.getRandomQuote().subscribe({
      next: (data) => {
        this.quote = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error al obtener la cita 😞';
        this.loading = false;
      }
    });
  }
}