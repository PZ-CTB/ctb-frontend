import { Typography, useTheme } from '@mui/material';
import React from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import styled from 'styled-components';

import { formatUSD } from 'utils/number';

import { StockChartData } from './types';
import { useChartParams } from './utils';

type Props = {
  data: StockChartData[];
};

const StockChart: React.FC<Props> = ({ data }) => {
  const theme = useTheme();

  const lowestChartValue = Math.min(...data.map((d) => d.low ?? d.avg));
  const highestChartValue = Math.max(...data.map((d) => d.high ?? d.avg));

  const { yDomain, yTicks } = useChartParams({
    low: lowestChartValue,
    high: highestChartValue,
    margin: 5,
  });

  if (data.length === 0)
    return <Typography>No data - please adjust your filters.</Typography>;

  const isAggregate = data[0].low !== undefined && data[0].high !== undefined;

  return (
    <Container>
      <ResponsiveContainer width="100%" height="100%" debounce={1}>
        <LineChart data={data} margin={{ bottom: 160, right: 20 }}>
          <XAxis dataKey="date" angle={-90} textAnchor="end" interval={0} />
          <YAxis domain={yDomain} ticks={yTicks} interval={0} />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Tooltip formatter={formatUSD} />
          <Legend verticalAlign="top" align="right" />

          <Line
            name={isAggregate ? 'Average price' : 'Price'}
            type={lineType}
            dataKey="avg"
            stroke={theme.palette.primary.main}
          />

          {isAggregate && (
            <>
              <Line
                name="Low price"
                type={lineType}
                dataKey="low"
                stroke={theme.palette.primary.light}
              />

              <Line
                name="High price"
                type={lineType}
                dataKey="high"
                stroke={theme.palette.primary.dark}
              />
            </>
          )}
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
};

export default StockChart;

const lineType = 'linear';

const Container = styled.div`
  height: 32rem;
`;
