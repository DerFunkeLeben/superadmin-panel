import { FC, ReactNode, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';

import Loader from '@/components/others/Loader';
import MainLayoutNavBar from './MainLayoutNavBar';
import useToggle from '@/hooks/useToggle';
import useAuth from '@/redux/services/auth/useAuth';

import { CONTENT_HEADER_ID } from '@/resources/constants';
import { routes } from '@/resources/routes/common';
import {
  Content,
  ContentTableWrap,
  ContentWrap,
  Header,
  HeaderTitle,
  MainLayoutStyles,
  white,
} from './styles';

export type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const [navbarOpened, toggleNavber] = useToggle(true);

  const navigate = useNavigate();
  const { handleLogout } = useAuth();

  const toProfile = () => navigate(routes.profile);

  return (
    <MainLayoutStyles>
      <MainLayoutNavBar isOpen={navbarOpened} />
      <Header>
        <IconButton onClick={toggleNavber}>
          <MenuIcon sx={white} />
        </IconButton>
        <HeaderTitle>Superadmin panel</HeaderTitle>
        <IconButton onClick={handleLogout}>
          <PersonIcon sx={white} />
        </IconButton>
        <IconButton onClick={toProfile}>
          <ExitToAppIcon sx={white} />
        </IconButton>
      </Header>
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
