const usdNumberFormatOptions = {
  style: 'currency',
  currency: 'USD',
};

const usdNumberFormat = new Intl.NumberFormat('en-US', usdNumberFormatOptions);

export const formatUSD = (value: number | string): string => {
  try {
    const number =
      typeof value === 'string' ? getNumberFromString(value) : value;
    return usdNumberFormat.format(number);
  } catch (err) {
    // if error converting to number, return `invalid` string
    return 'Invalid value';
  }
};

const getNumberFromString = (value: string): number => {
  if (value === '') return 0;

  const number = parseFloat(value);

  if (isNaN(number)) {
    throw new Error(
      `Value "${value}" passed to getNumberFromString is not a number.`
    );
  }

  return number;
};
