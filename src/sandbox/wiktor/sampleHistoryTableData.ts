const generateData = (): HistoryTableData[] => {
  const data = [];

  for (let i = 1; i <= 100; i++) {
    const date = new Date(
      2022,
      Math.floor(Math.random() * 12),
      Math.floor(Math.random() * 28) + 1
    )
      .toISOString()
      .slice(0, 10);
    const operationType = Math.random() > 0.5 ? 'Deposit' : 'Withdrawal';
    const amount = Math.floor(Math.random() * 1000) + 1;
    const balance: number =
      i === 1
        ? amount
        : data[i - 2].balance +
          (operationType === 'Deposit' ? amount : -amount);

    data.push({
      id: i,
      date,
      operationType,
      amount,
      balance,
    });
  }

  return data;
};

export type HistoryTableData = {
  id: number;
  date: string;
  operationType: string;
  amount: number;
  balance: number;
};

const data = generateData();

export default data;
