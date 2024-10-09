import { FC } from 'react';

import ContentHeader from '@/components/others/ContentHeader';
import ProfileInformation from './ProfileInformation';

const ProfilePage: FC = () => {
  return (
    <>
      <ContentHeader title='Профиль' />
      <ProfileInformation />
    </>
  );
};

export default ProfilePage;
