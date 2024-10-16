import { DefaultValues } from 'react-hook-form';
import { MutationDefinition } from '@reduxjs/toolkit/query';
import { UseMutation } from '@reduxjs/toolkit/src/query/react/buildHooks';

import { TFormatter } from '@/types';
import { Entity } from '@/types/api/common';

export interface CreateFormProps<TEntity extends Entity, TFormValues, TCreateDto> {
  initData?: DefaultValues<TFormValues>;
  formSchema: any;
  createMutationHook: UseMutation<MutationDefinition<TCreateDto, any, any, void, 'api'>>;
  formatter?: TFormatter<TEntity, TFormValues, TCreateDto>;
  routeOnSuccess: string;
  alertSuccess: string;
  alertError: string;
}
