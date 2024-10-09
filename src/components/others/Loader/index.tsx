import { CircularProgress } from '@mui/material';

import useMount from '@/hooks/useMount';

import { LoaderProps } from '@/components/others/Loader/types';
import { StyledLoader } from '@/components/others/Loader/styles';

const Loader = ({
  onMount,
  color = 'primary',
  size = 32,
  isStatic,
  isCenter,
  className,
}: LoaderProps) => {
  useMount(() => {
    if (onMount) onMount();
  });

  return (
    <StyledLoader
      $isJustifyCenter={!isStatic || isCenter}
      $isStatic={isStatic}
      className={className}
    >
      <CircularProgress size={size} color={color} />
    </StyledLoader>
  );
};

export default Loader;
