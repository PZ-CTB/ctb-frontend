import CallMadeIcon from '@mui/icons-material/CallMade';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import { Chip } from '@mui/material';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

import AmountChip from 'components/ui/chip/amount';

import styles from './historyTable.module.css';
import { HistoryTableData, OperationType } from './sampleHistoryTableData';

const sharedNumberOptions: Pick<GridColDef, 'headerAlign' | 'align'> = {
  headerAlign: 'right',
  align: 'right',
};

export function getTableColumnDefinitions(): GridColDef[] {
  return [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'date', headerName: 'Date', flex: 1 },
    {
      field: 'operationType',
      headerName: 'Operation Type',
      width: 150,
      flex: 1,
      renderCell: (
        params: GridRenderCellParams<
          HistoryTableData,
          HistoryTableData['operationType']
        >
      ) => {
        if (!params.value) return '-';
        return (
          <>
            <Chip
              label={params.value}
              color="info"
              className={styles.chipInsideTable}
            />
            {params.value === OperationType.Deposit && <CallReceivedIcon />}
            {params.value === OperationType.Withdrawal && <CallMadeIcon />}
          </>
        );
      },
    },
    {
      field: 'amount',
      headerName: 'Amount',
      flex: 1,
      headerAlign: 'right',
      align: 'right',
    },
    {
      field: 'balanceBefore',
      headerName: 'Balance Before',
      flex: 1,
      renderCell: (
        params: GridRenderCellParams<
          HistoryTableData,
          HistoryTableData['balanceBefore']
        >
      ) => (
        <AmountChip
          value={params.value ?? 0}
          className={styles.chipInsideTable}
        />
      ),
      ...sharedNumberOptions,
    },
    {
      field: 'balanceAfter',
      headerName: 'Balance After',
      flex: 1,
      renderCell: (
        params: GridRenderCellParams<
          HistoryTableData,
          HistoryTableData['balanceAfter']
        >
      ) => (
        <AmountChip
          value={params.value ?? 0}
          className={styles.chipInsideTable}
        />
      ),
      ...sharedNumberOptions,
    },
  ];
}
