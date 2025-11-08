import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FbiService } from '../../services/fbi';
import { FbiWanted } from '../../models/fbi.model';

@Component({
  selector: 'app-fbi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fbi.html',
  styleUrls: ['./fbi.css']
})
export class FbiComponent implements OnInit {

  wantedList: FbiWanted[] = [];
  loading = true;
  error = '';

  constructor(private fbiService: FbiService) { }

  ngOnInit(): void {
    this.fbiService.getWanted().subscribe({
      next: (data) => {
        this.wantedList = data.slice(0, 20); // solo los primeros 20
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al obtener la lista del FBI:', err);
        this.error = 'Error al cargar los datos del FBI.';
        this.loading = false;
      }
    });
  }


  
  getImage(person: FbiWanted): string {
    if (person.images && person.images.length > 0 && person.images[0].original) {
      return person.images[0].original;
    } else {
      // Imagen de respaldo si no hay foto
      return 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';
    }
  }
}