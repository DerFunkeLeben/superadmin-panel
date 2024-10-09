import { LoadingButton } from '@mui/lab';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

import WithStaticModal from '@/components/modals/WithStaticModal/WithStaticModal';
import useAwaitCallback from '@/hooks/useAwaitCallback';

import { ModalConfirmProps } from '@/components/modals/ModalConfirm/types';
import { StaticModalWrappedComponent } from '@/components/modals/WithStaticModal/types';

const ModalConfirm: StaticModalWrappedComponent<ModalConfirmProps> = ({ isOpen, ...props }) => {
  const {
    onCancel,
    onContinue,
    onlyContinue = false,
    withAwaiting = false,

    cancelLabel = 'Отмена',
    continueLabel = 'Подтвердить',
    title = 'Подтвердите действие на странице',
    subTitle = 'После подтверждения, восстановление будет невозможно',
  } = props.data || {};

  const [createClickHandler, isLoading] = useAwaitCallback(
    async (type: 'cancel' | 'continue') => {
      if (type === 'continue' && onContinue) {
        const continueResult = onContinue();

        if (withAwaiting) {
          await continueResult;
        }
      } else if (type === 'cancel' && onCancel) {
        onCancel();
      }

      props.onClose();
    },
    [onCancel, onContinue, props, withAwaiting],
  );

  if (!props.data) return null;

  return (
    <Dialog {...props} open={isOpen} maxWidth={props.data.maxWidth}>
      <DialogTitle>{title}</DialogTitle>

      {subTitle && (
        <DialogContent>
          <DialogContentText>{subTitle}</DialogContentText>
        </DialogContent>
      )}

      <DialogActions>
        {!onlyContinue && (
          <Button color='error' onClick={() => createClickHandler('cancel')}>
            {cancelLabel}
          </Button>
        )}

        <LoadingButton
          color='primary'
          loading={isLoading}
          onClick={() => createClickHandler('continue')}
        >
          {continueLabel}
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default WithStaticModal<ModalConfirmProps>(ModalConfirm);
