import {Injectable} from '@angular/core';
import {Stock} from '../interfaces/stock';
import {CreateNewStockRequest} from '../interfaces/create-new-stock-request';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) {
  }

  public getAllStocks(): Observable<Stock[]> {
    return this.http.get<Stock[]>(`${environment.apiUrl}/v1/stocks`)
  }

  public getStockByName(name: string): Observable<Stock> {
    return this.http.get<Stock>(`${environment.apiUrl}/v1/stocks/${name}`)
  }

  public createNewStock(request: CreateNewStockRequest): Observable<Stock> {
    return this.http.post<Stock>(`${environment.apiUrl}/v1/stocks`, request)
  }
}
