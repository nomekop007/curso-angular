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
    constructor(
      public nombre: string,
      public equipo: string,
      public nombreReal: string,
      public peleasGanadoas?: boolean,
      public pelasGanadas: number = 0
    ) {}
  }

  const antman = new Avenger("antman", "avengers", "and");

  console.log(antman);
})();
