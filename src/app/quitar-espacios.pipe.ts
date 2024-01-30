import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quitarEspacios'
})
export class QuitarEspaciosPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/\s/g, '');
  }

}
