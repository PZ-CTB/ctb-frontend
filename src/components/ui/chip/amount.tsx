import { Chip, ChipProps } from '@mui/material';
import React, { useMemo } from 'react';
import styled from 'styled-components';

type Props = ChipProps & {
  value: number;
  label?: string;
};

const AmountChip: React.FC<Props> = ({ value, label, ...props }) => {
  const color = useMemo(() => {
    if (value > 0) return 'success';
    if (value < 0) return 'error';
    return 'info';
  }, [value]);

  return <FixedWidthChip label={label ?? value} color={color} {...props} />;
};

export default AmountChip;

export const FixedWidthChip = styled(Chip)`
  width: 100px;
`;
