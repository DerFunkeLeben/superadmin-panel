import { Typography } from '@mui/material';
import styled, { css } from 'styled-components';

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
  margin-bottom: 16px;
  ${() => {
    return css`
      color: ${(props) => props.theme.palette.other.appTextLightBlack};
    `;
  }}
`;

export const AppTypography = styled(Typography)`
  display: flex;
  justify-content: flex-start;
  font-weight: 500;
  align-items: center;
  gap: 8px;
  ${() => {
    return css`
      color: ${(props) => props.theme.palette.other.appTextBlack};
    `;
  }}
`;
