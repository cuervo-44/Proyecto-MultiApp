import { Injectable } from '@angular/core';
import { Mejora } from '../models/Mejoras.model';

@Injectable({
  providedIn: 'root'
})
export class ClickerService {
  puntos = 0;
  totalGenerado = 0;
  puntosPorSegundo = 0;
  clickPower = 1;

  mejoras: Mejora[] = [
    { nombre: 'Mejora1', coste: 15, contador: 0, produccion: 0.1 },
    { nombre: 'Mejora2', coste: 30, contador: 0, produccion: 1 },
    { nombre: 'Mejora3', coste: 45, contador: 0, produccion: 2 },
    { nombre: 'Mejora4', coste: 120, contador: 0, produccion: 50 },
    { nombre: 'Mejora5', coste: 300, contador: 0, produccion: 800 },
    { nombre: 'Mejora6', coste: 10000, contador: 0, produccion: 10000 },
  ];

  boostActive = false;
  boostMultiplier = 1;

  constructor() {

    setInterval(() => {
      const generated = this.puntosPorSegundo * this.boostMultiplier;
      this.puntos += generated;
      this.totalGenerado += generated;
    }, 1000);
  }

  clickPuntos() {
    this.puntos = this.puntos + this.clickPower;
  }

  getCoste(m : Mejora) {
    return Math.floor(m.coste * Math.pow(1.15, m.contador));
  }

  comprarMejora(index:number) {
    const mejora = this.mejoras[index];
    const coste = this.getCoste(mejora);

    if (this.puntos >= coste) {
      this.puntos = this.puntos - coste;
      mejora.contador++;
      this.mejorarProduccion();
    }
  }

  mejorarProduccion() {
    let total = 0;
    this.mejoras.forEach(m => total += m.produccion * m.contador);
    this.puntosPorSegundo = total;
  }

  activarBoost() {
    this.boostActive = true;
    this.boostMultiplier = 2;
    //El timeout es un temporizador, en este caso de 10 s
    setTimeout(() => {
      this.boostActive = false;
      this.boostMultiplier = 1; 
    }, 10000);
  }

  reset() {
    this.puntos = 0;
    this.puntosPorSegundo = 0;
    this.clickPower = 1;

    this.mejoras.forEach(m => m.contador = 0);

    this.boostActive = false;
    this.boostMultiplier = 1;
  }


}