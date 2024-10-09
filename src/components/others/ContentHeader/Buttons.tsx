import { FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';

import { ButtonsProps } from './types';

const Buttons: FC<ButtonsProps> = ({ buttonsConfig }) => {
  const navigate = useNavigate();

  const onLinkHandler = useCallback(
    (link: string | undefined) => {
      if (link) navigate(link, { replace: true });
    },
    [navigate],
  );

  return (
    <>
      {buttonsConfig.map(
        ({
          textForButton = 'Добавить',
          size = 'small',
          variant = 'contained',
          color = 'success',
          loading = false,
          link,
          onClick,
          ...restProps
        }) => {
          const handleClick = () => onLinkHandler(link);

          return (
            <LoadingButton
              key={textForButton}
              {...restProps}
              size={size}
              color={color}
              variant={variant}
              loading={loading}
              onClick={onClick || handleClick}
            >
              {textForButton}
            </LoadingButton>
          );
        },
      )}
    </>
  );
};

export default Buttons;
