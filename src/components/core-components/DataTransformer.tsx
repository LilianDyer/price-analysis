import React from 'react';
import { ChartData } from '../../models/ChartData';
import { CompanyData } from '../../models/CompanyData';
import { PriceData } from '../../models/PriceData';
import PriceRecord from '../../models/price-record';
import Dashboard from '../Dashboard';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  selectedTicker: number[];
  onTickerSelection: (selectedTicker: number) => void;
}

const DataTransformer: React.FC<Props> = ({
  data,
  selectedTicker,
  onTickerSelection,
}) => {
  const COLORS = ['red', 'blue', 'purple', 'orange', 'magenta'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const allPriceRecords: PriceRecord[] = data.map((item: any) => ({
    date: item.date,
    securityId: item.securityId,
    companyId: item.companyId,
    ticker: item.ticker,
    isoCountryCode: item.isoCountryCode,
    close: item.close,
  }));

  const getUniqueCompanies = (list: number[]): number[] => {
    return Array.from(new Set(list));
  };

  const transformData = (originalData: PriceRecord[]) => {
    const companies = originalData.flatMap((item) => item.companyId);
    const companyIds = getUniqueCompanies(companies);
    const displayRecords: ChartData[] = [];
    companyIds.forEach((id, index) => {
      const companyRecords = originalData.filter(
        (record) => record.companyId === id
      );
      const companyData: CompanyData = {
        id: id,
        name: companyRecords[0].ticker ?? '',
        color: COLORS[index],
      };

      const prices: PriceData[] = [];
      companyRecords.forEach((price) => {
        prices.push({
          price: price.close,
          date: price.date,
        } as PriceData);
      });

      displayRecords.push({
        company: companyData,
        prices: prices,
      });
    });

    return displayRecords;
  };

  const chartData: ChartData[] = transformData(allPriceRecords);

  return (
    <Dashboard
      data={chartData}
      selectedTicker={selectedTicker}
      onTickerSelection={onTickerSelection}
    />
  );
};

export default DataTransformer;
