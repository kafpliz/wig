import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundToNearest',
  standalone: true
})
export class RoundToNearestPipe implements PipeTransform {

  transform(value: number) {
    let num:number = Number(value) 

      
    return num.toFixed(1)
  }

}
