import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react';

import { useWalletHistory } from '../../rquery';

import useWalletHistoryTableColumnDefinitions from './columns';

const WalletHistoryTable: React.FC = () => {
  const columns = useWalletHistoryTableColumnDefinitions();
  const { isLoading, data } = useWalletHistory();

  return (
    <Paper>
      <DataGrid
        loading={isLoading}
        columns={columns}
        rows={data?.transactions ?? []}
        getRowId={(row) => row.timestamp}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 20,
            },
          },
          sorting: {
            sortModel: [{ field: 'timestamp', sort: 'desc' }],
          },
        }}
        pageSizeOptions={[10, 20, 100]}
        autoHeight
        disableColumnSelector
        disableColumnFilter
        disableRowSelectionOnClick
      />
    </Paper>
  );
};

export default WalletHistoryTable;
