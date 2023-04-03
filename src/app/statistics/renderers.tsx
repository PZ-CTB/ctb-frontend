import CallMadeIcon from '@mui/icons-material/CallMade';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import { GridRenderCellParams } from '@mui/x-data-grid';

import AmountChip, { FixedWidthChip } from 'components/ui/chip/amount';

import { OperationType, StatisticsTableData } from './sampleHistoryTableData';

export const OperationTypeCellRenderer = (
  params: GridRenderCellParams<
    StatisticsTableData,
    StatisticsTableData['operationType']
  >
) => {
  if (params.value === undefined) return '-';

  return (
    <>
      <FixedWidthChip label={params.value} color="info" />
      {params.value === OperationType.Deposit && <CallReceivedIcon />}
      {params.value === OperationType.Withdrawal && <CallMadeIcon />}
    </>
  );
};

export const BalanceCellRenderer = (
  params: GridRenderCellParams<
    StatisticsTableData,
    StatisticsTableData['balanceBefore' | 'balanceAfter']
  >
) => {
  if (params.value === undefined) return '-';

  return <AmountChip value={params.value} />;
};
