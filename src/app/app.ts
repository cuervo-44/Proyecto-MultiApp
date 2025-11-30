import { Component, OnInit, signal, Renderer2} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { CambiarFondo } from './Services/cambiar-fondo';

@Component({
  selector: 'app-root',
  
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App implements OnInit {
  protected readonly title = signal('PrimerProyecto');
  currentBackground: string = '/images/fondo.jpg';

   constructor(private cambiarFondo: CambiarFondo, private renderer: Renderer2) {

  }

  ngOnInit(): void {
    this.cambiarFondo.currentBackground$.subscribe(url => {
      this.renderer.setStyle(document.body, 'background-image', `url(${url})`);
      this.renderer.setStyle(document.body, 'background-size', 'cover');
      this.renderer.setStyle(document.body, 'background-repeat', 'no-repeat');
      this.renderer.setStyle(document.body, 'background-attachment', 'fixed');
    });
  }
}