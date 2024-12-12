import {
  AlphaVantageResponse,
  DailyStockData,
  TransformedStockData,
} from '../models/alpha-vantage-data';

export function transformStockData(
  responseData: AlphaVantageResponse
): TransformedStockData {
  return {
    metaData: {
      information: responseData['Meta Data']['1. Information'],
      symbol: responseData['Meta Data']['2. Symbol'],
      lastRefreshed: responseData['Meta Data']['3. Last Refreshed'],
      outputSize: responseData['Meta Data']['4. Output Size'],
      timeZone: responseData['Meta Data']['5. Time Zone'],
    },
    daily: Object.entries(responseData['Time Series (Daily)']).reduce(
      (acc, [date, data]) => ({
        ...acc,
        [date]: transformDailyData(data),
      }),
      {}
    ),
  };
}

function transformDailyData(
  responseDaily: AlphaVantageResponse['Time Series (Daily)'][string]
): DailyStockData {
  return {
    open: parseFloat(responseDaily['1. open']),
    high: parseFloat(responseDaily['2. high']),
    low: parseFloat(responseDaily['3. low']),
    close: parseFloat(responseDaily['4. close']),
    volume: parseInt(responseDaily['5. volume'], 10),
  };
}
