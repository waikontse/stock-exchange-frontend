import {Component, Input} from '@angular/core';
import {ExchangeService} from '../services/exchange.service';
import {Exchange} from '../interfaces/exchange';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-exchanges',
  imports: [
    NgForOf
  ],
  templateUrl: './exchanges.component.html',
  standalone: true,
  styleUrl: './exchanges.component.css'
})
export class ExchangesComponent {
  @Input() protected exchanges!: Exchange[]

  constructor(private exchangeService: ExchangeService) {
  }

  // Try to call the exchanges endpoint
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
