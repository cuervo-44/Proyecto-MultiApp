import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [CommonModule],
  templateUrl: './contador.html',
  styleUrl: './contador.css'
})
export class Contador {
  numero:number = 0;

  sumar() {
    if (this.numero < 10) {
      this.numero++;
    } else {
      this.numero = 10;
    }
    
  }

  restar() {
    if (this.numero > 0) {
      this.numero--;
    } else {
      this.numero = 0;
    }
    
  }

  reset() {
    this.numero = 0;
  }

}
