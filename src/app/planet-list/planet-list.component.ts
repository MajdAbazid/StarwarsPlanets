import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Planet } from '../planet.model';
import { analyzeAndValidateNgModules } from '@angular/compiler';

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
  planetArray: Planet[] = [];
  searchArray: Planet[] = [];

  url = 'https://swapi.dev/api/planets';
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

    this.http
      .get<any>('https://swapi.dev/api/planets/?search=' + this.searchInput)
      .pipe(
        map((res: any) => {
          for (const x in res.results) {
            this.planetArray.push(res.results[x]);
          }
          return this.planetArray;
        })
      )
      .subscribe((any: any) => {
        this.planets = any;
      });
  }

  private fetchPlanets(pageURL?: any) {
    if (!pageURL) {
      pageURL = this.url;
    }

    this.http
      .get<any>(pageURL)
      .pipe(
        map((res: any) => {
          for (const x in res.results) {
            this.planetArray.push(res.results[x]);
          }
          if (res.next) {
            this.fetchPlanets(res.next);
          }
          return this.planetArray;
        })
      )
      .subscribe((any: any) => {
        this.planets = any;
      });
  }

  cTOp(n: number) {
    this.planetnumber = n;
  }

  returnPlanets(url: any) {
    const planetArray: Planet[] = [];
  }

  hide() {
    if (this.planetnumber != null) {
      this.value = true;
    } else {
      this.value = false;
    }
  }
}
