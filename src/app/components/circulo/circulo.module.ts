import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CirculoComponent } from './circulo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CirculoComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [CirculoComponent]
})
export class CirculoModule {}
