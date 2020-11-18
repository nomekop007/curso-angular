"use strict";
(() => {
    const retirarDinero = (montoRetirar) => {
        let dineroActual = 1000;
        return new Promise((resolve, reject) => {
            if (montoRetirar > dineroActual) {
                reject("no hay suficientes fondos");
            }
            else {
                dineroActual -= montoRetirar;
                resolve(dineroActual);
            }
        });
    };
    retirarDinero(1500)
        .then((montoActual) => console.log(montoActual))
        .catch(console.warn);
})();
