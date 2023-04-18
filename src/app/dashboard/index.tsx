import dayjs, { Dayjs } from 'dayjs';
import React from 'react';
import styled from 'styled-components';

import StockChart from './components/chart';
import StockChartFiltersForm from './components/filters/form';
import data from './sampleChartData';
import { useFiltersQueryParams } from './utils';

const DashboardPage: React.FC = () => {
  const [query] = useFiltersQueryParams();

  function getDataFromServer(
    startDate: Dayjs,
    endDate: Dayjs,
    aggregate: number
  ) {
    console.log(aggregate);
    return data.filter((record) => {
      const recordDateAsDayjsDate = dayjs(record.date);

      return (
        recordDateAsDayjsDate >= startDate && recordDateAsDayjsDate <= endDate
      );
    });
  }

  return (
    <Container>
      <StockChartFiltersForm />
      <StockChart
        data={getDataFromServer(
          dayjs(query.date_from),
          dayjs(query.date_to),
          query.aggregate
        )}
      />
    </Container>
  );
};

export default DashboardPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
