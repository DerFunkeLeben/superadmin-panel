import { CSSProperties, FC, ReactNode, Suspense, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';

import Loader from '@/components/others/Loader';
import MainLayoutNavBar from './MainLayoutNavBar';
import { useAppDispatch } from '@/redux/hooks/useAppDispatch';

import { setSidebarStateAction } from '@/redux/services/user/userActions';
import { selectSidebarState } from '@/redux/services/user/userGetters';
import { CONTENT_HEADER_ID } from '@/resources/constants';
import {
  Content,
  ContentTableWrap,
  ContentWrap,
  Header,
  HeaderLeftWrap,
  HeaderTitle,
  MainLayoutStyles,
} from './styles';

export type MainLayoutProps = {
  children: ReactNode;
  styles?: CSSProperties;
};

const MainLayout: FC<MainLayoutProps> = (props) => {
  const { children, styles } = props;

  const dispatch = useAppDispatch();

  const sidbarState = useSelector(selectSidebarState);
  const [isOpenNavBar, setIsOpenNavBar] = useState(sidbarState);

  const onToggleNavBarHandler = useCallback(() => {
    dispatch(setSidebarStateAction(!isOpenNavBar));

    setIsOpenNavBar((prev) => !prev);
  }, [dispatch, isOpenNavBar]);

  return (
    <MainLayoutStyles>
      <Header>
        <HeaderLeftWrap>
          <IconButton onClick={onToggleNavBarHandler}>
            <MenuIcon sx={{ color: '#fff' }} />
          </IconButton>
          <HeaderTitle>Superadmin panel</HeaderTitle>
        </HeaderLeftWrap>
      </Header>
      <MainLayoutNavBar isOpen={isOpenNavBar} />
      <Content>
        <ContentWrap id={CONTENT_HEADER_ID}>
          <ContentTableWrap style={styles}>
            <Suspense fallback={<Loader size={64} isStatic isCenter />}>{children}</Suspense>
          </ContentTableWrap>
        </ContentWrap>
      </Content>
    </MainLayoutStyles>
  );
};
export default MainLayout;
