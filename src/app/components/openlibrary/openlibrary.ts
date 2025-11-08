import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenLibraryService } from '../../services/openlibrary';
import { OpenLibraryBook } from '../../models/openlibrary.model';

@Component({
  selector: 'app-openlibrary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './openlibrary.html',
  styleUrl: './openlibrary.css'
})
export class OpenLibrary {
  books: OpenLibraryBook[] = [];
  loading = true;
  error = '';

  constructor(private openLibraryService: OpenLibraryService) { }

  ngOnInit(): void {
    this.openLibraryService.getBooks().subscribe({
      next: (data) => {
        this.books = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Error al obtener los libros.';
        this.loading = false;
      }
    });
  }

  getCover(book: OpenLibraryBook): string {
    return book.cover_i
      ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
      : 'https://via.placeholder.com/150x200?text=Sin+Portada';
  }
}