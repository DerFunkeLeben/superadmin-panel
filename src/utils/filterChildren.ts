export type WithChildren<T> = {
  children?: T[];
};

type fFilter = <T extends WithChildren<T>>(array: T[], fn: (arg: T) => boolean) => T[];

const filterChildren: fFilter = (array, fn) => {
  return array.reduce((r, o) => {
    const children = filterChildren(o.children || [], fn);
    const res = fn(o);
    if (!res) return r;
    if (res || children.length) r.push(Object.assign({}, o, children.length && { children }));
    return r;
  }, [] as any[]);
};

export default filterChildren;
