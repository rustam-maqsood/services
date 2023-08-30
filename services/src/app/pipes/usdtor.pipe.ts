import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdtor'
})
export class UsdtorPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const[price]=args;
    return value*price;
  }

}
