import { ReactNode } from 'react';

import { Client } from '@/resources/constants';
import { ApiUserRoles } from '@/types/api/users';

export type NavBarItem = {
  label: string;
  href?: string;
  icon?: ReactNode;
  clients?: Client[];
  roles?: ApiUserRoles[];
  children?: NavBarItems;
  isDisabled?: boolean;
};

export type NavBarItems = NavBarItem[];

export type NavbarConfig = Record<Client, NavBarItem | null>;
