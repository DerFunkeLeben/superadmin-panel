import { FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Breadcrumbs } from '@mui/material';

import { BreadcrumbsProps } from './types';
import { BreadcrumbsLink } from './styles';

const BreadCrumbs: FC<BreadcrumbsProps> = ({ breadcrumbs, title }) => {
  const navigate = useNavigate();

  const breadcrumbsDisabled = breadcrumbs.length === 0;

  const onLinkHandler = useCallback(
    (link: string | undefined) => {
      if (link) navigate(link, { replace: true });
    },
    [navigate],
  );

  if (breadcrumbsDisabled) return null;

  return (
    <Breadcrumbs aria-label='breadcrumb'>
      {breadcrumbs.map((item, i) => {
        const { name, url } = item;
        const handleClick = () => onLinkHandler(url);

        return (
          <BreadcrumbsLink colortext={0} key={i} underline='none' onClick={handleClick}>
            {name}
          </BreadcrumbsLink>
        );
      })}
      <BreadcrumbsLink colortext={1} underline='none'>
        {title}
      </BreadcrumbsLink>
    </Breadcrumbs>
  );
};
export default BreadCrumbs;
