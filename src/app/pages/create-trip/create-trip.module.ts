import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapBoxModule } from '../../components/mapbox/mapbox.module';
import { CreateTripComponent } from './create-trip.component';
import { CreateTripFormModule } from '../../components/create-trip-form/create-trip-form.module';

@NgModule({
  declarations: [CreateTripComponent],
  imports: [CommonModule, MapBoxModule, CreateTripFormModule],
  exports: [CreateTripComponent],
})
export class CreateTripModule {}
