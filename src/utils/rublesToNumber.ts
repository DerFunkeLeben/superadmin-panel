export const rublesToNumber = (value: string): number =>
  Number(value.replace('₽', '').replace(/,/g, ''));
