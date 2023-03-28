import Paper from '@mui/material/Paper';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import React from 'react';
import styled from 'styled-components'; // useTheme

import { HistoryTableData } from './sampleHistoryTableData';

const Container = styled.div`
  max-width: 700px;
  padding: 1rem;
  margin: 1rem;
`;

type TableProps = {
  data: HistoryTableData[];
};

const Table: React.FC<TableProps> = (props) => {
  //   const classes = useStyles();

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 30, flex: 1 },
    { field: 'date', headerName: 'Date', width: 100, flex: 1 },
    {
      field: 'operationType',
      headerName: 'Operation Type',
      width: 150,
      flex: 1,
    },
    { field: 'amount', headerName: 'Amount', width: 100, flex: 1 },
    { field: 'balance', headerName: 'Balance', width: 100, flex: 1 },
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
