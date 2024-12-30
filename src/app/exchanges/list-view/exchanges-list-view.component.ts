import {Component, Input} from '@angular/core';
import {ExchangeService} from '../../services/exchange.service';
import {Exchange} from '../../interfaces/exchange';
import {NgForOf} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-exchanges',
  imports: [
    NgForOf, MatCardModule, MatButton
  ],
  templateUrl: './exchanges-list-view.component.html',
  standalone: true,
  styleUrl: './exchanges-list-view.component.css'
})
export class ExchangesListViewComponent {
  @Input() protected exchanges!: Exchange[]
  @Input() protected registeredStocks!: string

  constructor(private exchangeService: ExchangeService) {
  }

  ngOnInit() {
    this.exchangeService.getAllExchanges().subscribe(result => {
      this.exchanges = result

      // Logging the result
      result.forEach((value) => {
        console.log(value)
      })
    })
  }
}
