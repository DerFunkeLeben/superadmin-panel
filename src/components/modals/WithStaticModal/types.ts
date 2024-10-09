import { FC } from 'react';

export type Entity = Record<string, any>;
export type StaticModalState = { isOpen: boolean };
export type StaticModalProps = Record<string, unknown>;
export type StaticModalWrappedComponent<T> = FC<StaticModalExampleProps & { data?: T }>;

export interface StaticModalExampleProps {
  isOpen: boolean;
  onClose: () => void;
}
