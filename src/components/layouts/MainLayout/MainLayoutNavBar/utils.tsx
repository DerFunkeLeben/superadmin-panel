import { Fragment, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import { ChildrenConfig } from './types';
import { NavBarItemText } from './styles';

const getChildrenConfig = (
  activeItemNavbar: string[],
  onClickItemHandlerNavBar: (e: MouseEvent<any>) => void,
  children?: ChildrenConfig[],
  isActiveCurrent?: boolean,
  isRoot?: boolean,
) => {
  if (!children?.length) return null;

  return (
    <>
      <List
        component='nav'
        style={{ display: isActiveCurrent || isRoot ? 'block' : 'none' }}
        sx={{ pl: isRoot ? 0 : 4 }}
      >
        {children.map((item) => {
          const hasChildren = Boolean(item.children?.length);
          const isActive = Boolean(item.label && activeItemNavbar.includes(item.label));
          const linkProps = item.href ? { component: Link, to: item.href } : {};

          const childrenConfig = getChildrenConfig(
            activeItemNavbar,
            onClickItemHandlerNavBar,
            item.children,
            isActive,
          );

          const itemProps = {
            'data-name': item.label,
            'data-active': isActive,
            onClick: hasChildren ? onClickItemHandlerNavBar : undefined,
          };

          return (
            <Fragment key={item.label}>
              {item.icon ? (
                <ListItemButton {...itemProps}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              ) : (
                <ListItem {...linkProps} {...itemProps}>
                  <NavBarItemText $isDisabled={!item.href}>{item.label}</NavBarItemText>
                </ListItem>
              )}
              {childrenConfig}
            </Fragment>
          );
        })}
      </List>
    </>
  );
};

export { getChildrenConfig };
