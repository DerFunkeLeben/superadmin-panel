import { ReactNode } from 'react';

export type TComponentsConfig = Record<'list' | 'create' | 'edit', ReactNode>;

export type NavBarItem = {
  label: string;
  href?: string;
  icon: ReactNode;
};

export type NavBarItems = NavBarItem[];
