import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uSDToJOD'
})
export class USDToJODPipe implements PipeTransform {

  transform(value: number,rate:number ): number {
    return value * 0.70;
  }

}
