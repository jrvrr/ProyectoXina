import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  isOpen = false;

  // Alterna entre abrir y cerrar
  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
