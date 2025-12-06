import { Component } from '@angular/core';
import { ClickerService } from '../Services/clicker-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clicker',
  imports: [CommonModule],
  templateUrl: './clicker.html',
  styleUrl: './clicker.css'
})
export class Clicker {
  showBoost = false;
  boostX = 0;
  boostY = 0;

  constructor(public service: ClickerService) {
    setInterval(() => {this.spawnBoost();},
    6000 + Math.random() * 6000);
  }

  spawnBoost() {
    this.boostX = Math.random() * 80;
    this.boostY = Math.random() * 80;
    this.showBoost = true;
  }
  
  activarBoost() {
    this.service.activarBoost();
    this.showBoost = false;
  }

  formatNumber(num: number): string {
    if (num < 1000) {
      return num.toString();
    }

    if (num < 1_000_000) {
      return num.toLocaleString('es-ES');
    } 
    if (num < 1_000_000_000) {
      return (num / 1_000_000).toFixed(3) + ' millones';
    }

    return (num / 1_000_000_000).toFixed(3) + ' billones';
  }

}
