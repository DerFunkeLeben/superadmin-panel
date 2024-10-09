const useUserInfo = () => {
  // const { data } = usersApi.endpoints.getUserMy.useQueryState();

  // const { userInfo } = useMemo(() => {
  //   return {
  //     userInfo: data?.data || undefined,
  //   };
  // }, [data]);

  const userInfo = {};

  return { userInfo };
};

export default useUserInfo;
