import { ReactElement } from 'react';

import { AppInputSelectValueProps } from '@/components/inputs/_AppInputSelect/types';
import { FormSelectPropsBase } from '@/types';

export interface FormInputSelectProps extends FormSelectPropsBase {
  renderInput: <M extends boolean>(inputProps: AppInputSelectValueProps<any, M>) => ReactElement<M>;
}
