import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-meny',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './meny.component.html',
  styleUrl: './meny.component.css'
})
export class MenyComponent {

}
