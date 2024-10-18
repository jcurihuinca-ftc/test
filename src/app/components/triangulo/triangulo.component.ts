import { Component } from '@angular/core';
import { TrianguloEscaleno, TrianguloEquilatero } from '../../models/triangulo-escaleno';
import { FiguraGeometrica } from '../../models/figura-geometrica';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss']
})
export class TrianguloComponent {
  // Variables para el input del triángulo
  ladoA: number = 0;
  ladoB: number = 0;
  ladoC: number = 0;
  perimetro: number = 0;
  tipoTriangulo: string = '';

  calcularPerimetroEscaleno() {
    const trianguloEscaleno = new TrianguloEscaleno(this.ladoA, this.ladoB, this.ladoC);
    this.perimetro = trianguloEscaleno.calcularPerimetro();
    this.tipoTriangulo = 'Escaleno';
  }

  calcularPerimetroEquilatero() {
    const trianguloEquilatero = new TrianguloEquilatero(this.ladoA);
    this.perimetro = trianguloEquilatero.calcularPerimetro();
    this.tipoTriangulo = 'Equilátero';
  }
}
