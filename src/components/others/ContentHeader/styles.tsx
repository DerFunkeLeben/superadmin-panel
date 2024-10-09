import { Link } from '@mui/material';
import styled, { css } from 'styled-components';

export type BreadcrumbsLinkProps = {
  colortext: 1 | 0;
};

export const ContentHeaderStyles = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
`;

export const ContentHeaderTextWrap = styled.div`
  display: grid;
  gap: 8px;
`;

export const ContentHeaderButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  height: 100%;
  align-items: center;
`;

export const ContentHeaderTitle = styled.div`
  font-weight: 500;
  font-size: 20px;
  color: var(--app-text-black);
`;

export const BreadcrumbsLink = styled(Link)<BreadcrumbsLinkProps>`
  ${({ colortext }) => {
    if (colortext) {
      return css`
        color: ${(props) => props.theme.palette.other.appTextBlack} !important;
      `;
    } else {
      return css`
        cursor: pointer;
        color: ${(props) => props.theme.palette.other.appTextLightBlack} !important;
      `;
    }
  }}
`;
