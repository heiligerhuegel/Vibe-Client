import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailedTripComponent } from './detailed-trip.component';

@NgModule({
  declarations: [DetailedTripComponent],
  imports: [CommonModule],
  exports: [DetailedTripComponent],
})
export class DetailedTripModule {}
