export interface Stock {
  name: string,
  description: string,
  priceInCents: number,
  lastUpdated: string
}

export declare type Stocks = Stock[]
