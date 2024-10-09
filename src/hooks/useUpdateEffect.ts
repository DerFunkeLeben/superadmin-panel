import { DependencyList, useEffect, useRef } from 'react';

const useUpdateEffect = (fn: () => void, dependencies: DependencyList) => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) fn();
    else didMountRef.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};

export default useUpdateEffect;
