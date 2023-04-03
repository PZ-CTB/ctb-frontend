import CallMadeIcon from '@mui/icons-material/CallMade';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import Chip from '@mui/material/Chip/Chip';
import Paper from '@mui/material/Paper';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import React from 'react';
import styled from 'styled-components'; // useTheme

import AmountChip from 'components/ui/chip/amount';

import { HistoryTableData, OperationType } from './sampleHistoryTableData';

type TableProps = {
  data: HistoryTableData[];
};

const Table: React.FC<TableProps> = (props) => {
  //   const classes = useStyles();

  const columns: GridColDef[] = [
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
            <Chip label={params.value} color="info" />
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
      renderCell: (params: GridRenderCellParams) => (
        <>
          <AmountChip value={params.value} />
        </>
      ),
      ...sharedNumberOptions,
    },
    {
      field: 'balanceAfter',
      headerName: 'Balance After',
      flex: 1,
      renderCell: (params: GridRenderCellParams) => (
        <>
          <AmountChip value={params.value} />
        </>
      ),
      ...sharedNumberOptions,
    },
  ];

  return (
    <Container>
      <Paper sx={{ height: '100%', width: '100%' }}>
        <DataGrid
          columns={columns}
          rows={props.data}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5, 10, 20, 100]}
          autoHeight
        />
      </Paper>
    </Container>
  );
};

export default Table;

const Container = styled.div`
  padding: 1rem;
  margin: 1rem;
`;

const sharedNumberOptions: Pick<GridColDef, 'headerAlign' | 'align'> = {
  headerAlign: 'right',
  align: 'right',
};
