import { useState } from 'react';

const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);

  const toggle = () => setState((state) => !state);

  return [state, toggle] as const;
};

export default useToggle;
