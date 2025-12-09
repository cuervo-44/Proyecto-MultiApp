//Hola Fonsi, la mayor parte del código de este componente está hecha con IA, te agradecería que no me puntuases
//este apartado, o que lo hicieses como un 0

import { Component, OnInit } from '@angular/core';
import { FichaPersonaje } from '../ficha-personaje/ficha-personaje';


@Component({
  selector: 'app-lista-personajes',
  imports: [FichaPersonaje],
  templateUrl: './lista-personajes.html',
  styleUrl: './lista-personajes.css'
})
export class ListaPersonajes {
   personajes = [
    {
      nombre: "Frieren",
      raza: "Elfo",
      poder: 4,
      imagen: "/images/frieren.jpg"
    },
    {
      nombre: "Seymour Skinner",
      raza: "Humano",
      poder: 1,
      imagen: "/images/skinner.png"
    },
    {
      nombre: "Maiq el Mentiroso",
      raza: "Khajiit",
      poder: 2,
      imagen: "/images/Maiq.png"
    },
    {
      nombre: "Ainz Ooal Gown",
      raza: "Esqueleto",
      poder: 5,
      imagen: "/images/Ainz.png"
    },
    {
      nombre: "Solaire de Astora",
      raza: "Humano",
      poder: 3,
      imagen: "/images/solaire.png"
    }
  ];

}