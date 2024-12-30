import {Component} from '@angular/core';

import {MatFormField, MatLabel} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCard, MatCardActions} from '@angular/material/card';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {StockService} from '../../services/stock.service';
import {UpdateStockRequest} from '../../interfaces/update-stock-request';

@Component({
  selector: 'app-update-stock',
  imports: [
    MatCard,
    MatFormField,
    MatButton,
    MatInputModule,
    MatFormFieldModule,
    MatCardActions,
    MatLabel,
    ReactiveFormsModule
  ],
  templateUrl: './stock-update.component.html',
  standalone: true,
  styleUrl: './stock-update.component.css'
})
export class StockUpdateComponent {
  stockUpdateFormGroup = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
  })

  constructor(private stockService: StockService) {

  }

  updateStock() {
    let stockName = this.stockUpdateFormGroup.controls.name.getRawValue()
    let stockPrice = this.stockUpdateFormGroup.controls.price.getRawValue()
    let request: UpdateStockRequest = {
      name: stockName ?? "ERROR",
      currentPriceInCents: Number(Number(stockPrice ?? "-1").toFixed(2)) * 100
    }

    console.log(`Updating stock: ${request.name} ${request.currentPriceInCents}`)
    this.stockService.updateStock(request).subscribe({
      complete: () => {
        console.log("Successfully updated stock")
        this.stockUpdateFormGroup.reset({
          name: '',
          price: ''
        })
      },
      error: err => console.error("Failed to update a stock.", err)
    })
  }
}
