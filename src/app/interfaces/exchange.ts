import {Stock} from './stock';

export interface Exchange {
  name: string,
  description: string,
  liveInMarket: boolean,
  stocks: Stock[]
}
