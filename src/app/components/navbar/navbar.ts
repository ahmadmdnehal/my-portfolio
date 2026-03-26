import { Component, HostListener } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  isScrolled = false;
  menuOpen = false;
  activeSection = 'hero';

  sections = ['hero', 'about', 'skills', 'projects', 'contact'];

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 50;

    for (const id of this.sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          this.activeSection = id;
        }
      }
    }
  }

  toggle() { this.menuOpen = !this.menuOpen; }
  close() { this.menuOpen = false; }
}