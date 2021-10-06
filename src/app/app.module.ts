import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlanetDetailsComponent } from './planet-list/planet-details/planet-details.component';
import { PlanetListComponent } from './planet-list/planet-list.component';
import { PlanetComponent } from './planet-list/planet (1)/planet.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetListComponent,
    PlanetComponent,
    PlanetDetailsComponent,
  ],
  imports: [HttpClientModule, BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
