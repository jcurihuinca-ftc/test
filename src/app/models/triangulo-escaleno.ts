import { FiguraGeometrica } from './figura-geometrica';

export class TrianguloEscaleno extends FiguraGeometrica {
  constructor(private ladoA: number, private ladoB: number, private ladoC: number) {
    super();
  }

  calcularPerimetro(): number {
    return this.ladoA + this.ladoB + this.ladoC;
  }
}

export class TrianguloEquilatero extends FiguraGeometrica {
  constructor(private lado: number) {
    super();
  }

  calcularPerimetro(): number {
    return this.lado * 3;
  }
}
