import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TrianguloComponent } from './triangulo.component';

@NgModule({
  declarations: [TrianguloComponent],
  imports: [CommonModule, FormsModule],
  exports: [TrianguloComponent]
})
export class TrianguloModule {}
