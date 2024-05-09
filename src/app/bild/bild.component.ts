import { Component } from '@angular/core';

@Component({
  selector: 'app-bild',
  standalone: true,
  imports: [],
  templateUrl: './bild.component.html',
  styleUrl: './bild.component.css'
})
export class BildComponent {
  museeumBild: string= 'assets/images/museeum1.jpg';
  changeImage(): void {
    this.museeumBild = 'assets/images/museeum2.jpg';
  }
}
