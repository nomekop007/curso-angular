import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultarConstrasenia'
})
export class OcultarConstraseniaPipe implements PipeTransform {

  transform(value: String, activo: boolean): unknown {

    if (activo) {
      value = '*'.repeat(value.length);
    }
    return value;
  }

}
