"use strict";
(() => {
    /*   class Avenger {
      nombre: string;
      equipo: string;
      nombreReal: string;
      puedePelear: boolean;
  
      constructor(
        nombre: string,
        equipo: string,
        nombreReal: string,
        puedePelear: boolean
      ) {
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
        this.puedePelear = puedePelear;
      }
    } */
    class Avenger {
        constructor(nombre, equipo, nombreReal, peleasGanadoas, pelasGanadas = 0) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.peleasGanadoas = peleasGanadoas;
            this.pelasGanadas = pelasGanadas;
        }
    }
    const antman = new Avenger("antman", "avengers", "and");
    console.log(antman);
})();
