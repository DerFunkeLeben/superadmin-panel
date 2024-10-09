export type OptionsFlags<Type> = {
  [Property in keyof Type]?: boolean | undefined | any;
};

// https://github.com/react-hook-form/react-hook-form/discussions/1991#discussioncomment-351784
export const getOnlyDirtyValues = <FormValues>(
  dirtyFields: OptionsFlags<FormValues>,
  allValues: FormValues,
): Partial<FormValues> => {
  const res: Partial<FormValues> = {};

  for (const fieldKey in dirtyFields) {
    if (
      dirtyFields[fieldKey] !== undefined &&
      dirtyFields[fieldKey] !== false &&
      allValues[fieldKey] !== undefined
    ) {
      res[fieldKey] = allValues[fieldKey];
    }
  }

  return res;
};

export const clearObject = (obj: Record<string, any>) =>
  Object.fromEntries(Object.entries(obj).filter(([, v]) => v != null));
