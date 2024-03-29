import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Perfect Vibe - Alpha';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateHome(): void {
    this.router.navigate(['']);
  }
}
