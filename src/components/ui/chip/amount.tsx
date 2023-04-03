import { Chip } from '@mui/material';
import { useMemo } from 'react';

type Props = {
  value: number;
  className?: string; // for styled-components
};

const AmountChip: React.FC<Props> = ({ className, value }) => {
  const color = useMemo(() => {
    if (value > 0) return 'success';
    if (value < 0) return 'error';
    return 'info';
  }, [value]);

  return <Chip className={className} label={value} color={color} />;
};

export default AmountChip;
