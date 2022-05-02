import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'continuara'
})
export class ContinuaraPipe implements PipeTransform {

  transform(valor: string): string {
    if(valor.toString().length > 160){
      valor = valor.substring(0, 160);
    }
    valor = valor.concat('...');
    return valor;
  }

}
