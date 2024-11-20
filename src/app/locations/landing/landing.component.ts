import { Component } from '@angular/core';

@Component({
  selector: 'nirvana-landing',
  standalone: true,
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  locations: string[] = [
    'Athens',
    'Rome',
    'Buenos Aires',
    'Madrid',
    'New York',
  ];
}
