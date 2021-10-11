import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Planet } from 'src/app/planet.model';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css'],
})
export class PlanetComponent implements OnInit {
  @Input() planet: Planet[];
  @Input() name: string;
  @Input() index: number;

  @Output() cTOp = new EventEmitter<number>();
  constructor() {}

  sendToParent(n: number) {
    this.cTOp.emit(n);
  }

  ngOnInit(): void {}
}
