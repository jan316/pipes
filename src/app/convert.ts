import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class Convert implements PipeTransform {

  transform(value: number, targetUnits: string): unknown {

    switch (targetUnits) {
      case 'km':
        return value * 1.60934;
      case 'm':
        return value * 1.60934 * 1000;
      case 'cm':
        return value * 1.60934 * 1000 * 100;
      default:
        throw new Error('Target unit is not supported')
    }

  }

}
