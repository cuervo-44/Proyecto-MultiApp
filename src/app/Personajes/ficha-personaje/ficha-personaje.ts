import { Component, Input } from '@angular/core';
import Swal from 'sweetalert2'

type NewType = undefined;

@Component({
  selector: 'app-ficha-personaje',
  imports: [],
  templateUrl: './ficha-personaje.html',
  styleUrl: './ficha-personaje.css'
})
export class FichaPersonaje {
 @Input() personaje: any;

  getBackgroundColor() {
    switch (this.personaje.raza) {
      case "Humano": return "#3e3edbff";
      case "Elfo": return "#73e473ff";
      case "Esqueleto": return "#3a362aff";
      case "Khajiit": return "#b79e43ff";
      default: return "white";
    }
  }

  getStars(n: number) {
    return "★".repeat(n) + "☆".repeat(5 - n);
  }

   mostrarFicha() {
    Swal.fire({
      title: this.personaje.nombre,
      html: `
        <img src="${this.personaje.imagen}" style="width:150px; border-radius:8px; margin-bottom:10px;">
        <p><strong>Raza:</strong> ${this.personaje.raza}</p>
        <p><strong>Poder:</strong> ${this.getStars(this.personaje.poder)}</p>
      `,
      background: this.getBackgroundColor(),
      color: "white",
      confirmButtonText: "Cerrar"
    });
  }

}
