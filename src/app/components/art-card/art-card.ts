import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-art-card',
  imports: [],
  templateUrl: './art-card.html',
  styleUrl: './art-card.css'
})
export class ArtCard {
  @Input() title        : string = '';
  @Input() category   : string = '';
  @Input() description  : string = '';
  @Input() image        : string = '';
  @Input() likes        : number = 0;
  
  @Input() onLike!: (title: string) => void;

  protected handleLike() {
    if (this.onLike) {
      this.onLike(this.title); // le paso el título de la obra al padre
    }
  }

}
