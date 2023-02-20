import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'redondear',
})
export class RedondearPipe implements PipeTransform {
  transform(value: any): number {
    let numero = Math.round(value);
    return numero;
  }
}
