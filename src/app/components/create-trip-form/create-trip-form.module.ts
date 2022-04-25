import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTripFormComponent } from './create-trip-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CreateTripFormComponent],
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  exports: [CreateTripFormComponent],
})
export class CreateTripFormModule {}
