import { CompanyData } from './CompanyData';
import { PriceData } from './PriceData';

export interface ChartData {
  company: CompanyData;
  prices: PriceData[];
}
