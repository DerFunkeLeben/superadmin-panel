import { FC, MouseEventHandler, useCallback, useState } from 'react';
import { Delete as DeleteIcon } from '@mui/icons-material';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import { Button, IconButton, Popover, SvgIcon } from '@mui/material';

import { AppContainer, AppDescription, AppGroupButton, AppTypography } from './styles';

export type ConfirmButtonProps = {
  onSubmit?: () => void;
  title?: string;
  desc?: string;
};

const ConfirmButton: FC<ConfirmButtonProps> = (props) => {
  const { onSubmit, desc, title } = props;

  const [buttonRef, setButtonRef] = useState<HTMLButtonElement | null>(null);

  const [isOpen, setIsOpen] = useState(false);

  const onClickIconHandler: MouseEventHandler<HTMLButtonElement> = useCallback((e) => {
    e.stopPropagation();
    setIsOpen(true);
    setButtonRef(e.currentTarget);
  }, []);

  const onCloseHandler = useCallback(() => {
    setIsOpen(false);
    setButtonRef(null);
  }, []);

  return (
    <>
      <IconButton size='small' onClick={onClickIconHandler} color='error'>
        <DeleteIcon />
      </IconButton>

      <Popover
        anchorEl={buttonRef}
        open={isOpen}
        onClose={onCloseHandler}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <AppContainer>
          <AppTypography>
            <SvgIcon color='warning'>
              <ReportProblemOutlinedIcon />
            </SvgIcon>
            {title !== undefined ? title : 'Вы уверены, что хотите удалить?'}
          </AppTypography>
          <AppDescription>
            {desc !== undefined
              ? desc
              : 'Это действие необратимо, восстановить объект будет невозможно.'}
          </AppDescription>
          <AppGroupButton>
            <Button size='small' variant='contained' fullWidth color='error' onClick={onSubmit}>
              да
            </Button>
            <Button
              size='small'
              variant='outlined'
              fullWidth
              color='inherit'
              onClick={onCloseHandler}
            >
              нет
            </Button>
          </AppGroupButton>
        </AppContainer>
      </Popover>
    </>
  );
};
export default ConfirmButton;
