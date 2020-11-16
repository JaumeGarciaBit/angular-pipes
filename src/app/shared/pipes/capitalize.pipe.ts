import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
//de string ponga la primera letra de cada palabra en mayúsculas

  transform(cadena: string): string {

  return  cadena
            .split(' ')
            .map(elemento => elemento
            .split('')[0] //.charAt(0)
            .toLocaleUpperCase()
            .concat(elemento
            .slice(1)))
            .join(' ');


  }

}
