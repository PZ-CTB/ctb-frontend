import _ from 'lodash';
import { YAxisProps } from 'recharts';

const linspace = (
  start: number,
  stop: number,
  num: number,
  endpoint = false
) => {
  const div = endpoint ? num - 1 : num;
  const step = _.round((stop - start) / div, -1);
  const end = start + (div * step + 1);
  return _.range(start, end, step);
};

type ChartParams = {
  yDomain: YAxisProps['domain'];
  yTicks: YAxisProps['ticks'];
};

type Props = {
  low: number;
  high: number;
  /* Margin in percentage */
  margin: number;
};

export const useChartParams = (props: Props) => {
  const { low, high, margin } = props;

  const lowestChartTick = (low * (100 - margin)) / 100;
  const highestChartTick = (high * (100 + margin)) / 100;

  const yDomain = [lowestChartTick, highestChartTick];

  const yTicks = linspace(
    _.round(lowestChartTick, -1),
    _.round(highestChartTick, -1),
    6
  );

  return { yDomain, yTicks } satisfies ChartParams;
};
