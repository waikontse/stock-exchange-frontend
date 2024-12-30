import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCard, MatCardActions} from '@angular/material/card';
import {ExchangeService} from '../../services/exchange.service';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {RegisterStockOnExchangeRequest} from '../../interfaces/register-stock-on-exchange-request';

@Component({
  selector: 'app-register-stock',
  imports: [MatSelectModule, MatInputModule, MatFormFieldModule, MatCard, MatCardActions, ReactiveFormsModule, ReactiveFormsModule, MatButton,],
  templateUrl: './exchange-stock-register.component.html',
  standalone: true,
  styleUrl: './exchange-stock-register.component.css'
})
export class ExchangeStockRegisterComponent {
  registerStockFormGroup = new FormGroup({
    exchangeName: new FormControl(''),
    stockName: new FormControl('')
  })

  constructor(private exchangeService: ExchangeService) {
  }

  registerStockOnExchange() {
    console.log("Register a new stock on exchange.")
    let exchangeName = this.registerStockFormGroup.controls.exchangeName.getRawValue()
    let exchangeDescription = this.registerStockFormGroup.controls.stockName.getRawValue()

    let request: RegisterStockOnExchangeRequest = {
      exchangeName: exchangeName ?? "ERROR",
      stockName: exchangeDescription ?? "empty description"
    }
    this.exchangeService.registerStockOnExchange(request).subscribe({
      complete: () => {
        console.log("Registration of stock completed.")
        this.registerStockFormGroup.controls.exchangeName.setValue('')
        this.registerStockFormGroup.controls.stockName.setValue('')
      },
      error: (e) => console.error("Failed to register stock on exchange.", e)
    })
  }
}
