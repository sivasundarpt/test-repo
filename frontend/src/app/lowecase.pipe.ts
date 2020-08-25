import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lowecase'
})
export class LowecasePipe implements PipeTransform {

  transform(value: any): any {
    console.log('coming value', value);
    return value.length;
  }

}
