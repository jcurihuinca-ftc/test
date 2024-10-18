import { Circulo } from '../../models/circulo';
import { Component } from '@angular/core';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss']

})
export class CirculoComponent {
  radio: number = 0;
  perimetro: number | null = null;

  calcularPerimetro() {
    const circulo = new Circulo(this.radio);
    this.perimetro = circulo.calcularPerimetro();
  }
}
