import { Component, EventEmitter, Output, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';



interface Category {
  name: string;
  icon: string;
}



@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})

export class Sidebar {
  // Evento que emite la categoría seleccionada
  filterChange = output<{ category?: string }>();

  // Categorías disponibles
  categories: Category[] = [
    { name: 'Todos', icon: '/images/icon/all.jpg' },
    { name: 'Classical', icon: '/images/icon/classical.jpg' },
    { name: 'Anime', icon: '/images/icon/anime.jpeg' },
    { name: '8 bit', icon: '/images/icon/8bit.jpg' }
  ];

  // Controla si el sidebar está abierto
  isOpen = signal<boolean>(false);

  // Alterna el menú
  toggleMenu() {
    this.isOpen.update(open => !open);
  }

  // Selecciona categoría y cierra el menú
  selectCategory(category: string) {
    this.filterChange.emit({ category });
    this.isOpen.set(false);
  }
}