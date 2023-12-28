import { Component, inject, signal } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { WeatherService } from '../service/weather.service';
import { Clima } from '../interface/openweathermap.interface';
import { DecimalPipe } from '@angular/common';
import { CityComponent } from '../components/city/city.component';
import { DetailsComponent } from '../components/details/details.component';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [DecimalPipe, CityComponent, DetailsComponent],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css',
})
export class WeatherComponent {
  objectWeather!: Clima;
  private readonly weatherSvc = inject(WeatherService);
  // parametro = signal('');

  ngOnInit(): void {
    initFlowbite();
  }

  onSearchWeatherCity(city: string) {
    // console.log(value);
    this.weatherSvc.searchWeatherCity(city).subscribe(
      (resOK) => {
        this.objectWeather = resOK;
        // console.log(resOK);
      },
      (resFail) => {
        console.log('error');
      }
    );
  }
}
