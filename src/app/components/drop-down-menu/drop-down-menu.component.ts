import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drop-down-menu',
  templateUrl: './drop-down-menu.component.html',
  styleUrls: ['./drop-down-menu.component.scss'],
})
export class DropDownMenuComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToNewTripPage(): void {
    this.router.navigate(['newtrip']);
  }

  navigateToAllTripsPage(): void {
    this.router.navigate(['alltrips']);
  }

  navigateHome(): void {
    this.router.navigate(['']);
  }
}
