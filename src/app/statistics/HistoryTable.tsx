import Paper from '@mui/material/Paper';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import React from 'react';
import styled from 'styled-components'; // useTheme

import { getTableColumnDefinitions } from './columns';
import { HistoryTableData } from './sampleHistoryTableData';

type TableProps = {
  data: HistoryTableData[];
};

const Table: React.FC<TableProps> = (props) => {
  const columns: GridColDef[] = getTableColumnDefinitions();

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
