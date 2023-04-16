import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup, {
  ToggleButtonGroupProps,
} from '@mui/material/ToggleButtonGroup';
import React from 'react';
import { Controller } from 'react-hook-form';

type Props = ToggleButtonGroupProps & {
  name: string;
  options: Record<string, string>;
};

const ToggleButtonGroupInput: React.FC<Props> = ({
  name,
  options,
  ...buttonGroupProps
}) => {
  return (
    <Controller
      name={name}
      render={({ field: { onChange, value } }) => (
        <ToggleButtonGroup
          value={value}
          onChange={onChange}
          exclusive
          {...buttonGroupProps}
        >
          {Object.entries(options).map(([value, label]) => (
            <ToggleButton key={value} value={value}>
              {label}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      )}
    />
  );
};

export default ToggleButtonGroupInput;
