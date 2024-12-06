import { Fragment, useEffect, useState } from 'react';
import DataTransformer from './DataTransformer';
import { getPrices } from '../../services/price-records-service';
import DataSource from '../DataSource';
import Spinner from '../ui/Spinner';
import ErrorMessage from '../ui/ErrorMessage';

const DataContainer: React.FC = () => {
  const [apiUrl, setSelectedUrl] = useState<string>('/prices');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTicker, setSelectedTicker] = useState<number[]>([]);

  useEffect(() => {
    const getData = async () => {
      let result;
      setLoading(true);
      try {
        result = await getPrices(apiUrl);
        setData(result);
      } catch {
        setError(`Failed to get data: ${apiUrl}`);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [apiUrl]);

  const onUrlSelection = (selectedValue: string) => {
    setSelectedUrl(selectedValue);
  };

  const onTickerSelection = (tickerId: number) => {
    setSelectedTicker((prev) => {
      if (prev.includes(tickerId)) {
        return prev.filter((id) => id !== tickerId);
      }
      return [...prev, tickerId];
    });
  };

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (isLoading) {
    return <Spinner />;
  }
  
  return (
    <Fragment>
      <DataSource
        selectedValue={apiUrl}
        updateSelected={onUrlSelection}
      ></DataSource>

      <DataTransformer
        data={data}
        selectedTicker={selectedTicker}
        onTickerSelection={onTickerSelection}
      ></DataTransformer>
    </Fragment>
  );
};

export default DataContainer;
