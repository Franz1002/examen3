import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quote } from '../models/quotesapi.model';
import { switchMap, map } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
  
@Injectable({
  providedIn: 'root'
})
export class QuotesapiService {
  private quoteApi = 'https://api.quotable.io/random';
  private translateApi = 'https://api.mymemory.translated.net/get';

  constructor(private http: HttpClient) { }

  getRandomQuote(): Observable<Quote> {
    return this.http.get<Quote>(this.quoteApi).pipe(
      switchMap((quote) => {
        const translateContent$ = this.http.get<any>(
          `${this.translateApi}?q=${encodeURIComponent(quote.content)}&langpair=en|es`
        );

        const translateTags$ = quote.tags.map(tag =>
          this.http.get<any>(
            `${this.translateApi}?q=${encodeURIComponent(tag)}&langpair=en|es`
          )
        );

        return forkJoin([translateContent$, ...translateTags$]).pipe(
          map(([translatedContent, ...translatedTags]) => ({
            ...quote,
            content: translatedContent.responseData.translatedText,
            tags: translatedTags.map(t => t.responseData.translatedText)
          }))
        );
      })
    );
  }
}