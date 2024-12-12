import { useState, useEffect } from 'react';
import {
  AlphaVantageResponse,
  TransformedStockData,
} from '../models/alpha-vantage-data';
import { transformStockData } from '../utils/alpha-vantage';

interface StockDataState {
  data: TransformedStockData | null;
  loading: boolean;
  error: string | null;
}

export function useStockData(symbol: string = 'IBM') {
  const [state, setState] = useState<StockDataState>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const getStockData = async () => {
      try {
        const response = await fetch(
          `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=demo`
        );

        if (!response.ok) {
          throw new Error('Failed to get data from AlphaVantage');
        }

        const rawData = (await response.json()) as AlphaVantageResponse;

        const transformedData = transformStockData(rawData);
        setState({ data: transformedData, loading: false, error: null });
      } catch (err) {
        setState({
          data: null,
          loading: false,
          error: err instanceof Error ? err.message : 'An error occurred',
        });
      }
    };

    getStockData();
  }, [symbol]);

  return state;
}
