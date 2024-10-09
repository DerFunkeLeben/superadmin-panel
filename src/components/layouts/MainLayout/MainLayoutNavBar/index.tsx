import { MouseEvent, useState } from 'react';

import useNavBarConfig from '@/hooks/useNavBarConfig';

import { getChildrenConfig } from './utils';
import { MainLayoutNavBarProps } from './types';
import { MainLayoutNavBarInnerStyles, MainLayoutNavBarStyles } from './styles';

const MainLayoutNavBar = ({ isOpen }: MainLayoutNavBarProps) => {
  const [activeItemNavbar, setActiveItemNavbar] = useState<string[]>([]);
  const navbarConfig = useNavBarConfig();

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
      <MainLayoutNavBarInnerStyles>{config}</MainLayoutNavBarInnerStyles>
    </MainLayoutNavBarStyles>
  );
};
export default MainLayoutNavBar;
