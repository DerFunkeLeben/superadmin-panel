import { CSSProperties, FC, ReactNode, Suspense } from 'react';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';

import Loader from '@/components/others/Loader';
import MainLayoutNavBar from './MainLayoutNavBar';
import useToggle from '@/hooks/useToggle';
import useAuth from '@/redux/services/auth/useAuth';

import { CONTENT_HEADER_ID } from '@/resources/constants';
import {
  Content,
  ContentTableWrap,
  ContentWrap,
  Header,
  HeaderTitle,
  MainLayoutStyles,
} from './styles';

export type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const [navbarOpened, toggleNavber] = useToggle(true);
  const { handleLogout } = useAuth();

  return (
    <MainLayoutStyles>
      <Header>
        <IconButton onClick={toggleNavber}>
          <MenuIcon sx={{ color: '#fff' }} />
        </IconButton>
        <HeaderTitle>Superadmin panel</HeaderTitle>
        <IconButton onClick={handleLogout}>
          <ExitToAppIcon sx={{ color: '#fff' }} />
        </IconButton>
      </Header>
      <MainLayoutNavBar isOpen={navbarOpened} />
      <Content>
        <ContentWrap id={CONTENT_HEADER_ID}>
          <ContentTableWrap>
            <Suspense fallback={<Loader size={64} isStatic isCenter />}>{children}</Suspense>
          </ContentTableWrap>
        </ContentWrap>
      </Content>
    </MainLayoutStyles>
  );
};
export default MainLayout;
