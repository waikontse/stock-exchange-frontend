import {Component} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCard, MatCardActions} from '@angular/material/card';
import {ExchangeService} from '../../services/exchange.service';
import {CreateNewExchangeRequest} from '../../interfaces/create-new-exchange-request';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-creator',
  imports: [MatSelectModule, MatInputModule, MatFormFieldModule, MatCard, MatCardActions, ReactiveFormsModule, ReactiveFormsModule, MatButton,],
  templateUrl: './exchange-creator.component.html',
  standalone: true,
  styleUrl: './exchange-creator.component.css'
})
export class ExchangeCreatorComponent {
  exchangeCreationForm = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
    }
  )


  constructor(private exchangeService: ExchangeService) {
  }

  createExchange() {
    console.log("Creating a new exchange.")
    let exchangeName = this.exchangeCreationForm.controls.name.getRawValue()
    let exchangeDescription = this.exchangeCreationForm.controls.description.getRawValue()

    let request: CreateNewExchangeRequest = {
      name: exchangeName ?? "ERROR",
      description: exchangeDescription ?? "empty description"
    }
    this.exchangeService.createNewExchange(request).subscribe({
      complete: () => {
        console.log("Creation completed")
        this.exchangeCreationForm.controls.name.setValue('')
        this.exchangeCreationForm.controls.description.setValue('')
      },
      error: (e) => console.error("Failed to create a new exchange.", e)
    }) 
  }
}
