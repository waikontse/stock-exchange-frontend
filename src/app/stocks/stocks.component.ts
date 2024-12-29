import {Component, Input} from '@angular/core';
import {StockService} from '../services/stock.service';
import {Stock} from '../interfaces/stock';
import {formatCurrency, NgForOf} from '@angular/common';
import {PricePipe} from '../pipes/price.pipe';

@Component({
  selector: 'app-stocks',
  imports: [
    NgForOf,
    PricePipe
  ],
  templateUrl: './stocks.component.html',
  standalone: true,
  styleUrl: './stocks.component.css'
})
export class StocksComponent {
  @Input() protected stocks!: Stock[]

  constructor(private stockService: StockService) {
  }

  ngOnInit() {
    this.stockService.getAllStocks().subscribe(result => {
      this.stocks = result

      // List all the stocks
      result.forEach(stock => {
        console.log(stock)
      })
    })
  }

  protected readonly formatCurrency = formatCurrency;
}
