import { Component, Input, OnInit } from '@angular/core';
import { Planet } from 'src/app/planet.model';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.css'],
})
export class PlanetDetailsComponent implements OnInit {
  @Input() planet: Planet[];
  @Input() pNr: number;
  display = false;

  constructor() {}

  ngOnInit(): void {}
}
