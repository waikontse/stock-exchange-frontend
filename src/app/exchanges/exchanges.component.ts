import { Component } from '@angular/core';
import {ExchangeService} from '../services/exchange.service';

@Component({
  selector: 'app-exchanges',
  imports: [],
  templateUrl: './exchanges.component.html',
  standalone: true,
  styleUrl: './exchanges.component.css'
})
export class ExchangesComponent {
  constructor(private exchangeService: ExchangeService) {

  }
}
