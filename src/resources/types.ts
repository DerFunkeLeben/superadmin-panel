import { ReactNode } from 'react';

export type TComponentsConfig = {
  list: ReactNode;
  edit: ReactNode;
  create?: ReactNode;
};

export type NavBarItem = {
  label: string;
  href?: string;
  icon: ReactNode;
};

export type NavBarItems = NavBarItem[];
