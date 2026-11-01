import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected isMenuOpen = false;
  protected readonly currentYear = new Date().getFullYear();
  protected toggleMenu(): void { this.isMenuOpen = !this.isMenuOpen; }
  protected closeMenu(): void { this.isMenuOpen = false; }
}
