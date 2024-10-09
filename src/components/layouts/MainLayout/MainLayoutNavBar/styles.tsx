import styled, { css } from 'styled-components';

import { brand } from '@/app/App/components/AppThemeProvider/themePrimitives';

export type MainLayoutNavBarStylesProps = {
  $isOpen: boolean;
};

export const MainLayoutNavBarStyles = styled.div<MainLayoutNavBarStylesProps>`
  grid-area: n;
  height: 100%;
  transition: 0.3s;
  overflow: hidden;
  background-color: ${brand[100]};
  box-sizing: border-box;

  ${({ $isOpen }) => {
    if (!$isOpen) {
      return css`
        width: 0;
      `;
    } else {
      return css`
        width: 300px;
      `;
    }
  }}
`;

export const MainLayoutNavBarInnerStyles = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: auto;
  height: 100%;
  max-height: calc(100vh - 72px);
`;

export type NavBarItemTextStylesProps = {
  $isDisabled?: boolean;
};

export const NavBarItemText = styled.div<NavBarItemTextStylesProps>`
  font-weight: 400;
  font-size: 14px;
  color: var(--app-text-black);

  ${({ $isDisabled }) => {
    if ($isDisabled) {
      return css`
        opacity: 0.5;
        pointer-events: none;
      `;
    }
  }}
`;
