import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-matatopos',
  imports: [CommonModule],
  templateUrl: './matatopos.html',
  styleUrl: './matatopos.css'
})
export class Matatopos {
  tablero: boolean [] = [false,false,false,false,false,false,false,false,true];
  contador: number = 0;
  chapuza: string = " ";

  mataTopo (index: number) {
    let nuevoTopo = this.generateNuevoTopo(index);
    this.tablero = [false,false,false,false,false,false,false,false,false];
    this.tablero[nuevoTopo] = true;
    this.contador++;
  }

  generateNuevoTopo (i:number) {
    let nuevoTopo = Math.floor(Math.random()*9);
    return nuevoTopo;
  }

  fallo() {
    this.contador--;
    console.log("has fallado");
  }

  hasGanado() {
      const audio = new Audio("/sounds/diglett.mp3");
      audio.play();

      Swal.fire("Enhorabuena, has ganado!");
      this.contador = 0;
    }

}
