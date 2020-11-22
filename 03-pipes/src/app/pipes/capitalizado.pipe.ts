import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: unknown, edad: number, activo: boolean, mensaje: string): string {
    return `${mensaje}  edad:${edad} activo:${activo}  (comando:ng g p )`;
  }

}
