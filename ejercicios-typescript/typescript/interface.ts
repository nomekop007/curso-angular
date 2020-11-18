(() => {
  interface Xmen {
    nombre: String;
    edad: Number;
    poder?: string;
  }

  //definir reglas de objeto (interface)

  const enviarMision = (xmen: Xmen) => {
    console.log(`Enviar a ${xmen.nombre} a mision`);
  };

  const regresarALcuartel = (xmen: Xmen) => {
    console.log(`Enviar a ${xmen.nombre}`);
  };

  const wolwrine: Xmen = {
    nombre: "logan",
    edad: 60,
  };

  enviarMision(wolwrine);
  regresarALcuartel(wolwrine);
})();
