import { Component } from '@angular/core';
import { FreetogameComponent } from './components/freetogame/freetogame';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DogapiComponent } from './components/dogapi/dogapi';
import { CountriesComponent } from './components/countries/countries';
import { NasaComponent } from './components/nasa/nasa';
  
@Component({
  selector: 'app-root',
  imports: [
    HttpClientModule,
    CommonModule,
    FreetogameComponent,
    DogapiComponent,
    CountriesComponent,
    NasaComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  activeTab = 'freetogame';
}
