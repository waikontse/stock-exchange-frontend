import {Component, Input} from '@angular/core';
import {StockService} from '../../services/stock.service';
import {Stock} from '../../interfaces/stock';
import {formatCurrency, NgForOf} from '@angular/common';
import {PricePipe} from '../../pipes/price.pipe';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-stocks',
  imports: [
    NgForOf,
    PricePipe,
    MatCardModule,
  ],
  templateUrl: './stocks-list-view.component.html',
  standalone: true,
  styleUrl: './stocks-list-view.component.css'
})
export class StocksListViewComponent {
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
