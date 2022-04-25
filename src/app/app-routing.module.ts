import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { DetailedTripComponent } from './pages/detailed-trip/detailed-trip.component';
import { AllTripsComponent } from './pages/all-trips/all-trips.component';
import { CreateTripComponent } from './pages/create-trip/create-trip.component';

const routes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'trip/:id', component: DetailedTripComponent },
  { path: 'newtrip', component: CreateTripComponent },
  { path: 'alltrips', component: AllTripsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
