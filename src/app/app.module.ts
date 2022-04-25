import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CreateTripModule } from './pages/create-trip/create-trip.module';
import { AllTripsModule } from './pages/all-trips/all-trips.module';
import { DetailedTripModule } from './pages/detailed-trip/detailed-trip.module';
import { HeaderModule } from './components/header/header.module';
import { DropDownMenuModule } from './components/drop-down-menu/drop-down-menu.module';
import { MapBoxModule } from './components/mapbox/mapbox.module';
import { FooterModule } from './components/footer/footer.module';
import { CreateTripFormModule } from './components/create-trip-form/create-trip-form.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    DropDownMenuModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MapBoxModule,
    CreateTripModule,
    AllTripsModule,
    DetailedTripModule,
    HeaderModule,
    FooterModule,
    CreateTripFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
