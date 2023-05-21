import * as _ from 'lodash';

export enum OperationType {
  Deposit = 'Deposit',
  Withdrawal = 'Withdrawal',
}

export type StatisticsTableData = {
  id: number;
  date: string;
  operationType: OperationType;
  amount: number;
  balanceBefore: number;
  balanceAfter: number;
};

const data: StatisticsTableData[] = _.shuffle([
  {
    id: 1,
    date: '2022-01-01',
    operationType: OperationType.Deposit,
    amount: 1000,
    balanceBefore: 0,
    balanceAfter: 1000,
  },
  {
    id: 2,
    date: '2022-01-05',
    operationType: OperationType.Withdrawal,
    amount: 500,
    balanceBefore: 1000,
    balanceAfter: 500,
  },
  {
    id: 3,
    date: '2022-01-10',
    operationType: OperationType.Deposit,
    amount: 750,
    balanceBefore: 500,
    balanceAfter: 1250,
  },
  {
    id: 4,
    date: '2022-01-15',
    operationType: OperationType.Withdrawal,
    amount: 250,
    balanceBefore: 1250,
    balanceAfter: 1000,
  },
  {
    id: 5,
    date: '2023-03-01',
    operationType: OperationType.Deposit,
    amount: 5000,
    balanceBefore: 0,
    balanceAfter: 5000,
  },
  {
    id: 6,
    date: '2023-03-07',
    operationType: OperationType.Withdrawal,
    amount: 1000,
    balanceBefore: 5000,
    balanceAfter: 4000,
  },
  {
    id: 7,
    date: '2023-03-14',
    operationType: OperationType.Deposit,
    amount: 2500,
    balanceBefore: 4000,
    balanceAfter: 6500,
  },
  {
    id: 8,
    date: '2023-03-21',
    operationType: OperationType.Withdrawal,
    amount: 2000,
    balanceBefore: 6500,
    balanceAfter: 4500,
  },
  {
    id: 9,
    date: '2023-03-28',
    operationType: OperationType.Deposit,
    amount: 10000,
    balanceBefore: 4500,
    balanceAfter: 14500,
  },
]);

export default data;
