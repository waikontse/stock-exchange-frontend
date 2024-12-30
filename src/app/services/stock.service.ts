import {Injectable} from '@angular/core';
import {Stock, Stocks} from '../interfaces/stock';
import {CreateNewStockRequest} from '../interfaces/create-new-stock-request';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {UpdateStockRequest} from '../interfaces/update-stock-request';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) {
  }

  public getAllStocks(): Observable<Stocks> {
    return this.http.get<Stock[]>(`${environment.apiUrl}/v1/stocks`)
  }

  public getStockByName(name: string): Observable<Stock> {
    return this.http.get<Stock>(`${environment.apiUrl}/v1/stocks/${name}`)
  }

  public createNewStock(request: CreateNewStockRequest): Observable<Stock> {
    return this.http.post<Stock>(`${environment.apiUrl}/v1/stocks`, request)
  }

  public updateStock(request: UpdateStockRequest): Observable<Stock> {
    return this.http.post<Stock>(`${environment.apiUrl}/v1/stocks/${request.name}`, request)
  }
}
