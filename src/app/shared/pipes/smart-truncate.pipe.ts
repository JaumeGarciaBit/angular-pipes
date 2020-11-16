import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'smartTruncate'
})
export class SmartTruncatePipe implements PipeTransform {
/*Recortar cadenas literales demasiado largas:
  Pasaremos el tamaño máximo de caracteres que se mostrará.
  No podrán quedarse palabras cortadas por la mitad, se mostrará la anterior palabra a la que aparece cortada.
  Si el tamaño pedido es superior al tamaño de la cadena se mostrará la cadena completa.
  Si el fragmento es inferior al tamaño de la cadena se concatenará con "...". */

  transform(cadena: string, maxSize: number): string {

    let cadenaArray = cadena.split(' ');

    let fragment = cadena
                      .slice(0, maxSize)
                      .split(' ');
        // cadena principal: 'hoy hace mucho frío'
        // fragmento: 'hoy hace muc'

        console.log(fragment);
    let fragmentNewArray =   fragment
                                .filter(
                                  (element, index)=> element.length === cadenaArray[index].length);

    let newFragment = fragmentNewArray.join(' ');

    if(newFragment.length !== cadena.length)
                newFragment +='...';

    return newFragment;
  }

}
