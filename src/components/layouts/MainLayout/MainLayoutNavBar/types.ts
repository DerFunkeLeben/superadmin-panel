import { ReactNode } from 'react';

export type MainLayoutNavBarProps = {
  isOpen: boolean;
};

export interface ChildrenConfig {
  label: string;
  href?: string;
  children?: any[];
  icon?: ReactNode;
  isDisabled?: boolean;
}
