import {Component} from '@angular/core';
import {MatFormField} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {StockService} from '../../services/stock.service';
import {CreateNewStockRequest} from '../../interfaces/create-new-stock-request';

@Component({
  selector: 'app-stock-creator',
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatFormField,
    ReactiveFormsModule,
    MatButton,
  ],
  templateUrl: './stock-creator.component.html',
  standalone: true,
  styleUrl: './stock-creator.component.css'
})
export class StockCreatorComponent {
  stockCreationFormGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
  })

  constructor(private stockService: StockService) {
  }

  createStock() {
    let stockName = this.stockCreationFormGroup.controls.name.getRawValue()
    let stockDescription = this.stockCreationFormGroup.controls.description.getRawValue()
    let stockPrice = this.stockCreationFormGroup.controls.price.getRawValue()
    let request: CreateNewStockRequest = {
      name: stockName ?? "ERROR",
      description: stockDescription ?? "ERROR description",
      currentPriceInCents: Number(Number(stockPrice ?? "-1").toFixed(2)) * 100
    }

    console.log(`Creating a new stock: ${request.name} ${request.description} ${request.currentPriceInCents}`)
    this.stockService.createNewStock(request).subscribe({
      complete: () => {
        console.log("Successfully create a new stock")
        this.stockCreationFormGroup.reset({
          name: '',
          description: '',
          price: ''
        })
      },
      error: err => console.error("Failed to create a new stock.", err)
    })
  }
}
