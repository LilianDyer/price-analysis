export interface AlphaVantageResponse {
  'Meta Data': {
    '1. Information': string;
    '2. Symbol': string;
    '3. Last Refreshed': string;
    '4. Output Size': string;
    '5. Time Zone': string;
  };
  'Time Series (Daily)': {
    [date: string]: {
      '1. open': string;
      '2. high': string;
      '3. low': string;
      '4. close': string;
      '5. volume': string;
    };
  };
}

export interface TransformedStockData {
  metaData: MetaData;
  daily: Record<string, DailyStockData>;
}

export interface MetaData {
  information: string;
  symbol: string;
  lastRefreshed: string;
  outputSize: string;
  timeZone: string;
}

export interface DailyStockData {
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}
