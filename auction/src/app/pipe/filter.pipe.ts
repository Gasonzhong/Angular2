import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], filterField: any,keyword:any): any {
   if (!filterField||!keyword) {
     return list;
   }

 return list.filter(item=>{
   let fiedValue=item[filterField];
   return fiedValue.indexOf(keyword)>=0
 });
  
  }

}
