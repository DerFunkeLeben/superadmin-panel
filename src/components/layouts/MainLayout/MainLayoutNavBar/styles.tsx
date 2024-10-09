import styled, { css } from 'styled-components';

export type MainLayoutNavBarStylesProps = {
  $isOpen: boolean;
};

export const MainLayoutNavBarStyles = styled.div<MainLayoutNavBarStylesProps>`
  grid-area: n;
  height: 100%;
  transition: 0.3s;
  overflow: hidden;
  background-color: white;
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

export const NavBarBottomWrap = styled.div``;

export type NavBarItemTextStylesProps = {
  $isDisabled?: boolean;
};

export const NavBarItemText = styled.div<NavBarItemTextStylesProps>`
  font-family: 'Inter', 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: black;

  ${({ $isDisabled }) => {
    if ($isDisabled) {
      return css`
        opacity: 0.5;
        pointer-events: none;
      `;
    }
  }}
`;
