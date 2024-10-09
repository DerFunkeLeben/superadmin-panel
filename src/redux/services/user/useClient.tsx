import { useSelector } from 'react-redux';

import { selectClient } from '@/redux/services/user/userGetters';

const useClient = () => {
  const client = useSelector(selectClient);

  return client;
};

export default useClient;
