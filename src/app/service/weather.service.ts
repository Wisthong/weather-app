import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clima } from '../interface/openweathermap.interface';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private readonly apiKey = environment.apiKey;
  private readonly http = inject(HttpClient);

  searchWeatherCity(city: string): Observable<Clima> {
    return this.http.get<any>(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        city +
        '&appid=' +
        this.apiKey +
        '&lang=sp&units=metric'
    );
  }
}
