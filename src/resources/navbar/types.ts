import { ReactNode } from 'react';

export type NavBarItem = {
  label: string;
  href?: string;
  icon: ReactNode;
};

export type NavBarItems = NavBarItem[];
