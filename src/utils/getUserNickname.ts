interface UserInfo {
  firstName?: string;
  lastName?: string;
  middleName?: string;
}

export const getUserNickname = (userInfo?: UserInfo) => {
  if (!userInfo) return '';

  const { firstName, lastName, middleName } = userInfo;

  if (!firstName && !lastName && !middleName) return '';

  return [firstName, lastName, middleName].filter(Boolean).join(' ');
};
