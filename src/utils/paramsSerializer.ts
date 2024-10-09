export const paramsSerializer = (params: Record<string, any>) => {
  const parameters = Object.entries(params).map(([key, value]) => {
    if (Array.isArray(value)) {
      return value.reduce<string>(
        (prev, value) => (prev ? prev + `&${key}=${value}` : `${key}=${value}`),
        '',
      );
    }

    return `${key}=${value}`;
  });

  return parameters.join('&');
};
