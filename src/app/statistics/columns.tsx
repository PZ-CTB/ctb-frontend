import { GridColDef } from '@mui/x-data-grid';

import { BalanceCellRenderer, OperationTypeCellRenderer } from './renderers';

const sharedNumberOptions: Pick<GridColDef, 'headerAlign' | 'align'> = {
  headerAlign: 'right',
  align: 'right',
};

const useStatisticsTableColumnDefinitions = () =>
  [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'date', headerName: 'Date', flex: 3 },
    {
      field: 'operationType',
      headerName: 'Operation Type',
      flex: 3,
      renderCell: OperationTypeCellRenderer,
    },
    {
      field: 'amount',
      headerName: 'Amount',
      flex: 2,
      ...sharedNumberOptions,
    },
    {
      field: 'balanceBefore',
      headerName: 'Balance Before',
      flex: 2,
      renderCell: BalanceCellRenderer,
      ...sharedNumberOptions,
    },
    {
      field: 'balanceAfter',
      headerName: 'Balance After',
      flex: 2,
      renderCell: BalanceCellRenderer,
      ...sharedNumberOptions,
    },
  ] satisfies GridColDef[];

export default useStatisticsTableColumnDefinitions;
