import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Planet } from '../planet.model';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css'],
})
export class PlanetListComponent implements OnInit {
  planets: Planet[];
  name: string;
  value: boolean;
  searchInput = '';

  url = 'https://swapi.dev/api/planets/?page=';
  @Input() planetnumber: number;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPlanets();
  }

  ngDoCheck() {
    this.hide();
  }

  ngOnChanges(changes: SimpleChanges) {}

  search() {
    if (this.searchInput === '') {
      this.fetchPlanets();
      return;
    }
    const planetArray: Planet[] = [];
    this.http
      .get<any>('https://swapi.dev/api/planets/?search=' + this.searchInput)
      .pipe(
        map((res: any) => {
          for (const x in res.results) {
            planetArray.push(res.results[x]);
          }
          return planetArray;
        })
      )
      .subscribe((any: any) => {
        this.planets = any;
      });
  }

  private fetchPlanets() {
    let x = 1;
    const planetArray: Planet[] = [];
    do {
      this.http
        .get<any>(this.url + x++)
        .pipe(
          map((res: any) => {
            for (const x in res.results) {
              planetArray.push(res.results[x]);
            }
            return planetArray;
          })
        )
        .subscribe((any: any) => {
          this.planets = any;
        });
    } while (x != 7);
  }

  cTOp(n: number) {
    this.planetnumber = n;
  }

  hide() {
    if (this.planetnumber != null) {
      this.value = true;
    } else {
      this.value = false;
    }
  }
}
