import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownMenuComponent } from './drop-down-menu.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [DropDownMenuComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatIconModule,
  ],
  exports: [DropDownMenuComponent],
})
export class DropDownMenuModule {}
