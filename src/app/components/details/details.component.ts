import { Component, Input } from '@angular/core';
import { Clima } from '../../interface/openweathermap.interface';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  @Input() objectWeather!: Clima;
}
