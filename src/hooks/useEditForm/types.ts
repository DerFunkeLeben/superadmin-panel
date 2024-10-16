import { MutationDefinition } from '@reduxjs/toolkit/query';
import { UseMutation } from '@reduxjs/toolkit/src/query/react/buildHooks';

import { TFormatter } from '@/types';
import { Entity } from '@/types/api/common';

export interface EditFormProps<TEntity extends Entity, TFormValues, TUpdateDto> {
  initialEntity: TEntity;
  formSchema: any;
  updateMutationHook: UseMutation<
    MutationDefinition<{ id: TEntity['id']; patch: TUpdateDto }, any, any, void, 'api'>
  >;

  formatter?: TFormatter<TEntity, TFormValues, TUpdateDto>;
  routeOnSuccess: string;
  alertSuccess: string;
  alertError: string;
}
