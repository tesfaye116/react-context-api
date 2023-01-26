import { useContext, FC } from 'react';
import { UserContext } from '../hooks/userContext';
import {
  Typography,
  Container,
  Box,
  Grid,
  Paper,
} from "@mui/material"

import {
  LinearProgress
} from "@mui/material"

import {
  DataGrid,
  GridColDef,
} from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'name',
    headerName: 'Name',
    width: 130,
    editable: true,
  },
  {
    field: 'username',
    headerName: 'Username',
    width: 130,
    editable: true,
  },

  {
    field: 'email',
    headerName: 'Email',
    width: 130,
    editable: true,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    width: 130,
    editable: true,
  },

  {
    field: 'website',
    headerName: 'Website',
    width: 130,
    editable: true,
  },
];

const UsersList: FC = () => {
  const { data, isLoading, isError } = useContext(UserContext);

  if (isLoading) {
    return <LinearProgress />
  }

  if (isError) {
    return <Typography variant="h4">Error</Typography>
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h4" component="div" gutterBottom>
          Users List
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={data}
                columns={columns}
                pageSize={5}
                checkboxSelection
              />
            </div>
          </Grid>
        </Grid>
      </Box>
    </Container >
  );
};

export default UsersList;













