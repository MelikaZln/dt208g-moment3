import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-konvertera',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './konvertera.component.html',
  styleUrl: './konvertera.component.css'
})
export class KonverteraComponent {
  meter: number = 0;
  feet:  number = 0;
  celcius: number =0;
  farenheit: number =0;

  feetM(): void {
    this.meter = this.feet * 0.3048;
  };
  mFeet(): void {
    this.feet = this.meter * 3.28084;
  };
  cFarenheit(): void {
    this.farenheit = this.celcius * 1.8 + 32;
  };
  farenheitC(): void {
    this.celcius = (this.farenheit -32 )* 0.5555;
  };


}
