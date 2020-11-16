import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

//Filtrar un array de objetos por uno de los campos
// ejemplo. alimentos = [{name:'pizza', calories:'400', image:'https://miimagen.com'}, ]
  transform(items: [], field: string, value: string ): any[] {
    return null;
  }

}
