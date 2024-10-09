export const getFullName = (names: (string | undefined)[]): string => {
  return names.filter((name) => name).join(' ');
};
