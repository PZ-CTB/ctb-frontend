import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react';

import useStatisticsTableColumnDefinitions from './columns';
import { StatisticsTableData } from './sampleHistoryTableData';

type Props = {
  data: StatisticsTableData[];
};

const StatisticsTable: React.FC<Props> = ({ data }) => {
  const columns = useStatisticsTableColumnDefinitions();

  return (
    <Paper>
      <DataGrid
        columns={columns}
        rows={data}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5, 10, 20, 100]}
        autoHeight
      />
    </Paper>
  );
};

export default StatisticsTable;
