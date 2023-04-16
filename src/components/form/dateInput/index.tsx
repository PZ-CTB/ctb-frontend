import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from 'dayjs';
import React from 'react';
import { Controller } from 'react-hook-form';

type Props = DatePickerProps<Dayjs> & {
  name: string;
  label: string;
  minDate: Dayjs;
  maxDate: Dayjs;
};
const DateInput: React.FC<Props> = ({
  name,
  label,
  minDate,
  maxDate,
  ...datePickerProps
}) => {
  return (
    <Controller
      name={name}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <DatePicker<Dayjs>
          label={label}
          format="YYYY-MM-DD"
          value={value}
          onChange={onChange}
          minDate={minDate}
          maxDate={maxDate}
          slotProps={{
            textField: {
              size: 'small',
              error: !!error,
              helperText: error?.message,
            },
          }}
          {...datePickerProps}
        />
      )}
    />
  );
};

export default DateInput;
