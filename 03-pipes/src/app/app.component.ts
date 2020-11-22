import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string = " Capitan America";
  nombre2: string = "Diego Antonio rios rojas";
  arreglo: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  PI: number = Math.PI;
  porcentaje: number = 0.235;
  salario: number = 450000;
  fecha: Date = new Date();
  idioma: String = "en";
  videoURL: string = "https://www.youtube.com/embed/vUKB3eGSt5Q";
  activar: boolean = true;

  valorPromesa = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve("llego la data");
    }, 4500)
  })

  heroe = {
    nombre: "Logan",
    clave: "wolwerine",
    edad: 500,
    direccion: {
      calle: "primera",
      casa: 20
    }
  }


  cambiarIdioma(idioma) {
    this.idioma = idioma;
  }
}
