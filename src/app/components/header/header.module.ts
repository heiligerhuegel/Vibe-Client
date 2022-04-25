import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownMenuModule } from '../drop-down-menu/drop-down-menu.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    DropDownMenuModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
