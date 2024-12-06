import React from 'react';
import Plot from 'react-plotly.js';
import { Paper } from '@mui/material';
import { ChartData } from '../models/ChartData';
import { Data } from 'plotly.js';

interface PriceChartProps {
  tickers: number[];
  selectedLines: ChartData[];
}

const PriceChart: React.FC<PriceChartProps> = ({
  tickers,
  selectedLines,
}) => {
  const generatePlotlyData = (chartData: ChartData[]) => {
    return chartData.map(
      (trace) =>
        ({
          x: trace.prices.map((d) => d.date),
          y: trace.prices.map((p) => p.price),
          type: 'scatter',
          mode: 'lines',
          line: {
            color: trace.company.color,
            width: 2,
          },
          name: trace.company.name,
          hovertemplate: 'Price: $%{y:.2f}<br>Date: %{x}<extra></extra>',
        } as Data)
    );
  };

  const plotlyData = generatePlotlyData(
    selectedLines.filter((line) => tickers.includes(line.company.id))
  );
  return (
    <Paper elevation={3} className='p-6 mb-6'>
      <Plot
        data={plotlyData}
        layout={{
          autosize: true,
          height: 700,
          title: {
            text: 'Price History',
            font: {
              size: 24,
              color: '#1f2937',
            },
          },
          paper_bgcolor: 'rgba(0,0,0,0)',
          plot_bgcolor: 'rgba(0,0,0,0)',

          margin: { t: 50, r: 20, b: 60, l: 90 },
          xaxis: {
            title: 'Date',
            gridcolor: '#e5e7eb',
            showgrid: true,
          },
          yaxis: {
            title: 'Price ($)',
            gridcolor: '#e5e7eb',
            showgrid: true,
            tickformat: '$.2f',
          },
          hovermode: 'x unified',
        }}
        config={{
          responsive: true,
          displayModeBar: true,
          displaylogo: false,
        }}
        className='w-full'
        style={{ width: '100%' }}
      />
    </Paper>
  );
};

export default PriceChart;
