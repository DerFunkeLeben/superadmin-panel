import styled, { css } from 'styled-components';

import { LoaderStyleProps } from '@/components/others/Loader/types';

export const StyledLoader = styled('div')<LoaderStyleProps>`
  display: flex;
  align-items: center;

  ${({ $isJustifyCenter }) =>
    $isJustifyCenter &&
    css`
      justify-content: center;
    `}

  ${({ $isStatic }) =>
    !$isStatic &&
    css`
      top: 0;
      left: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 1000;
      background: rgba(255, 255, 255, 0.5);
    `}

  color: #c1c1c1;
`;
