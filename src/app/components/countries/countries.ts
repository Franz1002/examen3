import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesService } from '../../services/countries';
import { Country } from '../../models/country.model';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './countries.html',
  styleUrls: ['./countries.css']
})
export class CountriesComponent implements OnInit {

  countries: Country[] = [];
  loading = true;
  error = '';

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.countriesService.getCountries().subscribe({
      next: (data) => {
        // 🔹 Filtrar solo países válidos (que tengan nombre y bandera)
        this.countries = data.filter(c =>
          c.name?.common && c.flags?.png
        );

        // (Opcional) ordenar por población descendente
        this.countries.sort((a, b) => (b.population || 0) - (a.population || 0));

        this.loading = false;
      },
      error: (err) => {
        console.error('Error al obtener los países:', err);
        this.error = 'Error al cargar los países.';
        this.loading = false;
      }
    });
  }

  getLanguages(country: Country): string {
    return country.languages ? Object.values(country.languages).join(', ') : '—';
  }

  getCurrency(country: Country): string {
    if (!country.currencies) return '—';
    const curr = Object.values(country.currencies)[0];
    return `${curr.name} (${curr.symbol})`;
  }

}
