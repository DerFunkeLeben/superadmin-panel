import { styled } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';

export const StyledGridOverlay = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  '& .no-rows-primary': {
    fill: '#3D4751',
    ...theme.applyStyles('light', {
      fill: '#AEB8C2',
    }),
  },
  '& .no-rows-secondary': {
    fill: '#1D2126',
    ...theme.applyStyles('light', {
      fill: '#E8EAED',
    }),
  },
}));

export const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  borderColor: theme.palette.info.light,
  '--DataGrid-rowBorderColor': theme.palette.info.light,

  '& .MuiDataGrid-cell': {
    borderColor: theme.palette.info.light,
  },

  '& .MuiDataGrid-footerContainer': {
    borderColor: theme.palette.info.light,
  },
}));
