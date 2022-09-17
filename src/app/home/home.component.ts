import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {

  constructor(
    private router: Router
  ) { }

  startNewGame() {
    this.router.navigate(['/play']);
  }

  navigateToSettings(): void {
    this.router.navigate(['/settings']);
  }

}
