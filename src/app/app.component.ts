import { Component, ViewEncapsulation } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { MenyComponent } from './meny/meny.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenyComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],})
  
export class AppComponent {
  title = 'momentEtt';
}
