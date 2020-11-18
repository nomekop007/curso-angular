"use strict";
(() => {
    //definir reglas de objeto (interface)
    const enviarMision = (xmen) => {
        console.log(`Enviar a ${xmen.nombre} a mision`);
    };
    const regresarALcuartel = (xmen) => {
        console.log(`Enviar a ${xmen.nombre}`);
    };
    const wolwrine = {
        nombre: "logan",
        edad: 60,
    };
    enviarMision(wolwrine);
    regresarALcuartel(wolwrine);
})();
