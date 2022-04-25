import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllTripsComponent } from './all-trips.component';

@NgModule({
  declarations: [AllTripsComponent],
  imports: [CommonModule],
  exports: [AllTripsComponent],
})
export class AllTripsModule {}
