import { Typography } from '@mui/material';
import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 16px;
`;

export const AppGroupButton = styled.div`
  display: flex;
  gap: 15px;
`;

export const AppDescription = styled(Typography).attrs({ variant: 'caption' })`
  margin-bottom: 16px !important;
`;

export const AppTypography = styled(Typography)`
  display: flex;
  justify-content: flex-start;
  font-weight: 500;
  align-items: center;
  gap: 8px;
`;
