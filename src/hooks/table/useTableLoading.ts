import { QueryStatus } from '@reduxjs/toolkit/query';

import { useAppSelector } from '@/redux/hooks/useAppSelector';

const useTableLoading = () => {
  const isLoading = useAppSelector((state) => {
    const queries = Object.values(state.api.queries);
    const mutations = Object.values(state.api.mutations);

    const deleteMutations = mutations.filter((mutation) =>
      mutation?.endpointName?.toLowerCase().includes('delete'),
    );

    const actions = [...queries, ...deleteMutations];
    const isPending = actions.some((action) => action?.status === QueryStatus.pending);

    return isPending;
  });

  return isLoading;
};

export default useTableLoading;
