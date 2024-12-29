import {Injectable} from '@angular/core';
import {Exchange, Exchanges} from '../interfaces/exchange';
import {CreateNewExchangeRequest} from '../interfaces/create-new-exchange-request';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment'
import {RegisterStockOnExchangeRequest} from '../interfaces/register-stock-on-exchange-request';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  constructor(private http: HttpClient) {
  }

  getAllExchanges(): Observable<Exchanges> {
    return this.http.get<Exchange[]>(`${environment.apiUrl}/v1/stock-exchanges`)
  }

  getExchangeByName(name: string): Observable<Exchange> {
    return this.http.get<Exchange>(`${environment.apiUrl}/v1/stock-exchanges/${name}`)
  }

  createNewExchange(request: CreateNewExchangeRequest): Observable<Exchange> {
    return this.http.post<Exchange>(`${environment.apiUrl}/v1/stock-exchanges`, request)
  }

  registerStockOnExchange(request: RegisterStockOnExchangeRequest): Observable<Exchange> {
    return this.http.post<Exchange>(`${environment.apiUrl}/v1/stock-exchanges/${request.exchangeName}`, request)
  }
}
