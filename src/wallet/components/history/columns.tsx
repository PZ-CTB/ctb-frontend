import { GridColDef } from '@mui/x-data-grid';
import dayjs from 'dayjs';

import { formatUSD } from 'utils/number';

import {
  AmountCellRenderer,
  OperationTypeCellRenderer,
  USDAmountCellRenderer,
} from './renderers';
import { WalletTransaction } from './types';

const sharedNumberOptions: Pick<GridColDef, 'headerAlign' | 'align'> = {
  headerAlign: 'right',
  align: 'right',
};

const useWalletHistoryTableColumnDefinitions = () =>
  [
    {
      field: 'timestamp',
      headerName: 'Date',
      flex: 3,
      valueFormatter: ({ value }) => dayjs(value).format('YYYY-MM-DD'),
    },
    {
      field: 'type',
      headerName: 'Operation Type',
      flex: 3,
      renderCell: OperationTypeCellRenderer,
    },
    {
      field: 'amount_btc',
      headerName: 'BTC Amount',
      flex: 2,
      renderCell: AmountCellRenderer,
      ...sharedNumberOptions,
    },
    {
      field: 'amount_usd',
      headerName: 'USD Amount',
      flex: 2,
      renderCell: USDAmountCellRenderer,
      ...sharedNumberOptions,
    },

    {
      field: 'total_btc_after_transaction',
      headerName: 'BTC Balance',
      flex: 2,
      ...sharedNumberOptions,
    },
    {
      field: 'total_usd_after_transaction',
      headerName: 'USD Balance',
      flex: 2,
      valueFormatter: ({ value }) => formatUSD(value),
      ...sharedNumberOptions,
    },
  ] satisfies GridColDef<WalletTransaction>[];

export default useWalletHistoryTableColumnDefinitions;
