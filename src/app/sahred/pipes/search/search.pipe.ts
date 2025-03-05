import { Pipe, PipeTransform } from '@angular/core';
import { product } from '../../../shared/interfaces/product';
@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(productList: product[], userWord: string): product[] {
    return productList.filter(product =>
      product.title.toLowerCase().includes(userWord.toLowerCase())
    );
  }
}
