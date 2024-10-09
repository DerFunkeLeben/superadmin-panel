import { MouseEvent, useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import useNavBarConfig from '@/hooks/useNavBarConfig';
import useAuth from '@/redux/services/auth/useAuth';

import { getChildrenConfig } from './utils';
import { MainLayoutNavBarProps } from './types';
import { MainLayoutNavBarInnerStyles, MainLayoutNavBarStyles, NavBarBottomWrap } from './styles';

const MainLayoutNavBar = ({ isOpen }: MainLayoutNavBarProps) => {
  const [activeItemNavbar, setActiveItemNavbar] = useState<string[]>([]);
  const navbarConfig = useNavBarConfig();
  const { handleLogout } = useAuth();

  const onClickItemHandlerNavBar = (e: MouseEvent<HTMLDivElement>) => {
    const { active, name } = e.currentTarget.dataset;
    const isActive = active === 'true';

    if (!name) return;

    setActiveItemNavbar((prevState) => {
      const newState = [...prevState];
      const foundIndex = prevState.indexOf(name);

      if (foundIndex === -1 || !isActive) {
        newState.push(name);
      } else {
        newState.splice(foundIndex, 1);
      }

      return newState;
    });
  };

  const config = getChildrenConfig(
    activeItemNavbar,
    onClickItemHandlerNavBar,
    navbarConfig,
    undefined,
    true,
  );

  return (
    <MainLayoutNavBarStyles $isOpen={isOpen}>
      <MainLayoutNavBarInnerStyles>
        {config}
        <NavBarBottomWrap>
          <ListItemButton onClick={handleLogout}>
            <ListItemIcon>
              <MoreVertIcon />
            </ListItemIcon>
            <ListItemText primary='Выйти из аккаунта' />
          </ListItemButton>
        </NavBarBottomWrap>
      </MainLayoutNavBarInnerStyles>
    </MainLayoutNavBarStyles>
  );
};
export default MainLayoutNavBar;
