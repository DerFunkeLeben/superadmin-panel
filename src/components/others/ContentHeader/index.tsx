import { FC } from 'react';
import { Portal } from '@mui/material';

import BreadCrumbs from './Breadcrumbs';
import Buttons from './Buttons';

import { CONTENT_HEADER_ID } from '@/resources/constants';
import { ContentHeaderProps } from './types';
import {
  ContentHeaderButtonGroup,
  ContentHeaderStyles,
  ContentHeaderTextWrap,
  ContentHeaderTitle,
} from './styles';

const ContentHeader: FC<ContentHeaderProps> = ({
  title,
  breadcrumbs = [],
  buttonsConfig = [],
  titleBadge,
  right,
}) => {
  const selector = document.getElementById(CONTENT_HEADER_ID);

  return (
    <Portal container={selector} disablePortal>
      <ContentHeaderStyles>
        <ContentHeaderTextWrap>
          <ContentHeaderTitle>
            {title} {titleBadge}
          </ContentHeaderTitle>
          <BreadCrumbs breadcrumbs={breadcrumbs} title={title} />
        </ContentHeaderTextWrap>
        <ContentHeaderButtonGroup>
          {right}
          <Buttons buttonsConfig={buttonsConfig} />
        </ContentHeaderButtonGroup>
      </ContentHeaderStyles>
    </Portal>
  );
};

export default ContentHeader;
