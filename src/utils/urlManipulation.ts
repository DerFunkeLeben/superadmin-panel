export const getParams = (search: string): Record<string, string> =>
  search
    .replace('?', '')
    .split('&')
    .reduce((p: Record<string, string>, e) => {
      const a = e.split('=');
      p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
      return p;
    }, {});
