import CallMadeIcon from '@mui/icons-material/CallMade';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import { GridRenderCellParams } from '@mui/x-data-grid';

import AmountChip, { FixedWidthChip } from 'components/ui/chip/amount';
import { formatUSD } from 'utils/number';

import { WalletTransaction } from './types';

export const OperationTypeCellRenderer = (
  params: GridRenderCellParams<WalletTransaction, WalletTransaction['type']>
) => {
  if (params.value === undefined) return '-';

  return (
    <>
      <FixedWidthChip label={params.value.toUpperCase()} color="info" />
      {['sell', 'withdraw'].includes(params.value) && <CallMadeIcon />}
      {['buy', 'deposit'].includes(params.value) && <CallReceivedIcon />}
    </>
  );
};

export const AmountCellRenderer = (
  params: GridRenderCellParams<WalletTransaction, number>
) => {
  if (params.value === undefined) return '-';

  return <AmountChip value={params.value} />;
};

export const USDAmountCellRenderer = (
  params: GridRenderCellParams<WalletTransaction, number>
) => {
  if (params.value === undefined) return '-';

  return <AmountChip value={params.value} label={formatUSD(params.value)} />;
};
