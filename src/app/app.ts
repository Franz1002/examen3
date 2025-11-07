import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FreetogameComponent } from './components/freetogame/freetogame';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HttpClientModule,
      FreetogameComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('examen');
}
