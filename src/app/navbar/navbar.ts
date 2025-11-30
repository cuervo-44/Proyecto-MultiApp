import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { CambiarFondo } from '../Services/cambiar-fondo';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-navbar',
  imports: [MatToolbarModule, RouterLink, MatButtonModule, MatIconModule, MatMenuModule, CommonModule, MatSlideToggleModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  fondoAlternativoActivo = false;
  constructor(private cambiarFondo: CambiarFondo) {

  }

  changeBackground() {
    if (this.fondoAlternativoActivo) {
      this.cambiarFondo.setFondo('/images/fondo.jpg');
    } else {
      this.cambiarFondo.setFondo('/images/navidad.jpg');
    }

    this.fondoAlternativoActivo = !this.fondoAlternativoActivo;
  }
}


