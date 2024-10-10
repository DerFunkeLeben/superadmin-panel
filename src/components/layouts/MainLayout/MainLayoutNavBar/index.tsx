import { Link } from 'react-router-dom';
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import useNavBarConfig from '@/hooks/useNavBarConfig';

import { MainLayoutNavBarProps } from './types';
import {
  listItemButtonStyles,
  MainLayoutNavBarInnerStyles,
  MainLayoutNavBarStyles,
} from './styles';

const MainLayoutNavBar = ({ isOpen }: MainLayoutNavBarProps) => {
  const navbarConfig = useNavBarConfig();

  return (
    <MainLayoutNavBarStyles $isOpen={isOpen}>
      <MainLayoutNavBarInnerStyles>
        <List component='nav'>
          {navbarConfig.map((item) => {
            const linkProps = item.href ? { component: Link, to: item.href } : {};

            return (
              <ListItemButton sx={listItemButtonStyles} {...linkProps} key={item.label}>
                <ListItemIcon sx={{ color: '#fff' }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            );
          })}
        </List>
      </MainLayoutNavBarInnerStyles>
    </MainLayoutNavBarStyles>
  );
};
export default MainLayoutNavBar;
