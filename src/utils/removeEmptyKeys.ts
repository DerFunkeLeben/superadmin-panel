export const removeEmptyKeys = (obj: Record<string, any>) => {
  const newObj: Record<string, any> = {};

  Object.keys(obj).forEach((key) => {
    // две проверки ниже для массивов
    if (obj[key]?.length === 0) return;
    else if (obj[key]?.length > 0) {
      newObj[key] = obj[key];
      return;
    }

    if (obj[key] === Object(obj[key])) newObj[key] = removeEmptyKeys(obj[key]);
    else if (obj[key] !== undefined && obj[key] !== null && obj[key] !== '') newObj[key] = obj[key];
  });

  return newObj;
};
