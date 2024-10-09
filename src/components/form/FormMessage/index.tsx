import Alert from '@mui/material/Alert';
import styled from 'styled-components';

export const FormMessageError = styled(Alert).attrs({ severity: 'error' })``;

export const FormMessageSuccess = styled(Alert).attrs({ severity: 'success' })`
  margin-bottom: 16px;
`;
