import { Component, signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { ArtCard } from './components/art-card/art-card';
import { Footer } from './components/footer/footer';
import { Sidebar } from './components/sidebar/sidebar';
import { CommonModule } from '@angular/common';

interface Art {
  title: string;
  description: string;
  image: string;
  likes: number;
  category: string
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, ArtCard, Footer, Sidebar, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})


export class App {


  arts = signal<Art[]>([
  //Classical Art
  { title: 'Mona Lisa', description: 'Obra clásica', category: 'Classical', image: 'images/Retrato.jpg', likes: 0 },
  { title: 'Mona Lisa', description: 'Obra clásica', category: 'Classical', image: 'images/Retrato.jpg', likes: 0 },
  { title: 'Mona Lisa', description: 'Obra clásica', category: 'Classical', image: 'images/Retrato.jpg', likes: 0 },
  { title: 'Mona Lisa', description: 'Obra clásica', category: 'Classical', image: 'images/Retrato.jpg', likes: 0 },
  { title: 'Mona Lisa', description: 'Obra clásica', category: 'Classical', image: 'images/Retrato.jpg', likes: 0 },
  { title: 'Mona Lisa', description: 'Obra clásica', category: 'Classical', image: 'images/Retrato.jpg', likes: 0 },

  //Abine
  { title: 'Goku', description: 'Dragon Ball', category: 'Anime', image: 'images/Goku.jpg', likes: 0 },
  { title: 'Saitama', description: 'One Punch Man', category: 'Anime', image: 'images/OnePunchMan.jpg', likes: 0 },
  { title: 'Saitama', description: 'One Punch Man', category: 'Anime', image: 'images/OnePunchMan.jpg', likes: 0 },
  { title: 'Saitama', description: 'One Punch Man', category: 'Anime', image: 'images/OnePunchMan.jpg', likes: 0 },
  { title: 'Saitama', description: 'One Punch Man', category: 'Anime', image: 'images/OnePunchMan.jpg', likes: 0 },
  { title: 'Saitama', description: 'One Punch Man', category: 'Anime', image: 'images/OnePunchMan.jpg', likes: 0 },
  //Juegos 8 bit
  { title: 'Mario Bros', description: 'Videojuego retro', category: '8 bit', image: 'images/MarioBros.jpeg', likes: 0 },
  { title: 'Mario Bros', description: 'Videojuego retro', category: '8 bit', image: 'images/MarioBros.jpeg', likes: 0 },
  { title: 'Mario Bros', description: 'Videojuego retro', category: '8 bit', image: 'images/MarioBros.jpeg', likes: 0 },
  { title: 'Mario Bros', description: 'Videojuego retro', category: '8 bit', image: 'images/MarioBros.jpeg', likes: 0 },
  { title: 'Mario Bros', description: 'Videojuego retro', category: '8 bit', image: 'images/MarioBros.jpeg', likes: 0 },
  { title: 'Deltarune', description: 'Videojuego 8bit', category: '8 bit', image: 'images/Deltarune.gif', likes: 0 },
  { title: 'Deltarune', description: 'Videojuego 8bit', category: '8 bit', image: 'images/Deltarune.gif', likes: 0 },
  { title: 'Deltarune', description: 'Videojuego 8bit', category: '8 bit', image: 'images/Deltarune.gif', likes: 0 },
  { title: 'Deltarune', description: 'Videojuego 8bit', category: '8 bit', image: 'images/Deltarune.gif', likes: 0 },
  { title: 'Deltarune', description: 'Videojuego 8bit', category: '8 bit', image: 'images/Deltarune.gif', likes: 0 },
  { title: 'Deltarune', description: 'Videojuego 8bit', category: '8 bit', image: 'images/Deltarune.gif', likes: 0 },
  { title: 'Deltarune', description: 'Videojuego 8bit', category: '8 bit', image: 'images/Deltarune.gif', likes: 0 },
  { title: 'Deltarune', description: 'Videojuego 8bit', category: '8 bit', image: 'images/Deltarune.gif', likes: 0 },
  { title: 'Deltarune', description: 'Videojuego 8bit', category: '8 bit', image: 'images/Deltarune.gif', likes: 0 },
  { title: 'Deltarune', description: 'Videojuego 8bit', category: '8 bit', image: 'images/Deltarune.gif', likes: 0 },
  { title: 'Deltarune', description: 'Videojuego 8bit', category: '8 bit', image: 'images/Deltarune.gif', likes: 0 },
  { title: 'Deltarune', description: 'Videojuego 8bit', category: '8 bit', image: 'images/Deltarune.gif', likes: 0 },
  { title: 'Deltarune', description: 'Videojuego 8bit', category: '8 bit', image: 'images/Deltarune.gif', likes: 0 },
  { title: 'Deltarune', description: 'Videojuego 8bit', category: '8 bit', image: 'images/Deltarune.gif', likes: 0 },
  { title: 'Deltarune', description: 'Videojuego 8bit', category: '8 bit', image: 'images/Deltarune.gif', likes: 0 },
  { title: 'Deltarune', description: 'Videojuego 8bit', category: '8 bit', image: 'images/Deltarune.gif', likes: 0 },
  { title: 'Deltarune', description: 'Videojuego 8bit', category: '8 bit', image: 'images/Deltarune.gif', likes: 0 },
  { title: 'Deltarune', description: 'Videojuego 8bit', category: '8 bit', image: 'images/Deltarune.gif', likes: 0 },
  { title: 'Deltarune', description: 'Videojuego 8bit', category: '8 bit', image: 'images/Deltarune.gif', likes: 0 },
  { title: 'Deltarune', description: 'Videojuego 8bit', category: '8 bit', image: 'images/Deltarune.gif', likes: 0 }

]);


  selectedCategory = signal<string>('Todos');


  applyFilter(event: { category?: string }) {
    this.selectedCategory.set(event.category || 'Todos');
  }
  filteredArts() {
    if (this.selectedCategory() === 'Todos') {
      return this.arts();
    }
    return this.arts().filter(art => art.category === this.selectedCategory());
  }

  totalLikes() {
    return this.arts().reduce((sum, art) => sum + art.likes, 0);
  }

  incrementLikes = (title: string) => {
    this.arts.update(arts =>
      arts.map(art =>
        art.title === title ? { ...art, likes: art.likes + 1 } : art
      )
    );
  }
}