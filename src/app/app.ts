import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FreetogameComponent } from './components/freetogame/freetogame';
import { CommonModule } from '@angular/common';
import { DogapiComponent } from './components/dogapi/dogapi';
import { CountriesComponent } from './components/countries/countries';
import { NasaComponent } from './components/nasa/nasa';
import { FbiComponent } from './components/fbi/fbi';
import { QuotesapiComponent } from './components/quotesapi/quotesapi';
import { HomeComponent } from './components/home/home';
import { WeatherapiComponent } from './components/weatherapi/weatherapi';
@Component({
  selector: 'app-root',
  imports: [
    HttpClientModule,
    CommonModule,
    FreetogameComponent,
    DogapiComponent,
    CountriesComponent,
    NasaComponent,
    FbiComponent,
    QuotesapiComponent,
    WeatherapiComponent,
    HomeComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  activeTab = ''; // Lo dejamos vacío si ya quieres mostrar app.html directamente
}
