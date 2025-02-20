import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundToNearest',
  standalone: true
})
export class RoundToNearestPipe implements PipeTransform {

  transform(value: any) {
    let num:number = Number(value) 

      
    return num.toFixed(1)
  }

}
