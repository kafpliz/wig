import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchCardType',
  standalone: true
})
export class SearchCardTypePipe implements PipeTransform {

  transform(value:string): string {
   if(value == 'movie'){
    return 'фильм'
   } else {
    return 'сериал'
   }
  }

}
