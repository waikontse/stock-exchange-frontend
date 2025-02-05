import {Routes} from '@angular/router';
import {ExchangesListViewComponent} from './exchanges/list-view/exchanges-list-view.component';
import {StocksListViewComponent} from './stocks/list-view/stocks-list-view.component';
import {ExchangeCreatorComponent} from './exchanges/creator/exchange-creator.component';
import {StockCreatorComponent} from './stocks/stock-creator/stock-creator.component';
import {ExchangeStockRegisterComponent} from './exchanges/register-stock/exchange-stock-register.component';
import {StockUpdateComponent} from './stocks/stock-update/stock-update.component';

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: ExchangesListViewComponent},
  {path: 'exchanges', component: ExchangesListViewComponent},
  {path: 'exchanges/create', component: ExchangeCreatorComponent},
  {path: 'exchanges/register', component: ExchangeStockRegisterComponent},
  {path: 'stocks', component: StocksListViewComponent},
  {path: 'stocks/create', component: StockCreatorComponent},
  {path: 'stocks/update', component: StockUpdateComponent},
];
