import { ChartData } from '../models/ChartData';
import CompanySelector from './CompanySelector';
import PriceChart from './PriceChart';

interface Props {
  data: ChartData[];
  selectedTicker: number[];
  onTickerSelection: (selectedTicker: number) => void;
}
const Dashboard: React.FC<Props> = ({
  data,
  selectedTicker,
  onTickerSelection,
}) => {
  return (
    <div className='w-full max-w-6xl mx-auto p-6'>
      <CompanySelector
        companyData={data.flatMap((record) => record.company)}
        tickers={selectedTicker}
        onTickerChange={onTickerSelection}
      ></CompanySelector>

      <PriceChart tickers={selectedTicker} selectedLines={data}></PriceChart>
    </div>
  );
};

export default Dashboard;
