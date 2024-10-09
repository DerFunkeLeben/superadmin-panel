import filterChildren from '@/utils/filterChildren';
import { Client } from '../constants';
import { NavBarItem, NavBarItems } from './types';
import { ApiUserRoles } from '@/types/api/users';

export const generateChildrenConfig = (
  rootChildren: NavBarItems,
  config: NavBarItem,
  client: Client,
) => {
  const children = filterChildren(
    rootChildren,
    ({ clients }) => !clients || clients.includes(client),
  );

  if (!children.length) return null;

  return { ...config, children };
};

export const filterRoles = (config: NavBarItem, role: ApiUserRoles | undefined) => {
  const children = filterChildren(
    config.children || [],
    ({ roles }) => !roles || (role ? roles.includes(role) : true),
  );

  if (!children.length) return null;

  return { ...config, children };
};
