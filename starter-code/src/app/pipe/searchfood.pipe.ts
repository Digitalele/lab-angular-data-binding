import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtersearchfood'
})
export class SearchfoodPipe implements PipeTransform {

  transform(value: any, searchFood: string): any {
    return value.filter((item)=>{
    		
      return item.name === searchFood

    });
  }

}



