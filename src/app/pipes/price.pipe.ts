import { Pipe, PipeTransform } from '@angular/core';
import {Stock} from '../interfaces/stock';
import {formatCurrency} from '@angular/common';

@Pipe({
  standalone: true,
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: Stock): string {
    let mainCurrency = value.priceInCents / 100

    return formatCurrency(mainCurrency, "en-NL", "€")
  }
}
