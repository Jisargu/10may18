import { Component, OnInit } from '@angular/core';
import { Animal } from "../animales";

@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.css']
})
export class AnimalesComponent implements OnInit {
  ave = "Pollo";
  ave2 = "Pingüino";
  ave3 = "Avestruz";
  ave4 = "Colibrí";
  ave5 = "Guacamaya";

  animalin: Animal = {
    nombre: "Pollin",
    peso: 1,
    sexo: "masculino",
    esta_extinto: false,
  }

  animalon: Animal = {
    nombre: "Elefante",
    peso: 999,
    sexo: "femenino",
    esta_extinto: false,
  }

  constructor() { }

  ngOnInit() {
  }

}
