import { Component } from '@angular/core';
import {StockService} from '../services/stock.service';

@Component({
  selector: 'app-stocks',
  imports: [],
  templateUrl: './stocks.component.html',
  standalone: true,
  styleUrl: './stocks.component.css'
})
export class StocksComponent {
  constructor(private stockService: StockService) {
  }
}
