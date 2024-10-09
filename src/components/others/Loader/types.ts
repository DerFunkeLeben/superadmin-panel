import { CircularProgressProps } from '@mui/material/CircularProgress';

export interface LoaderProps {
  size?: number;
  isCenter?: boolean;
  isStatic?: boolean;
  onMount?: () => void;
  color?: CircularProgressProps['color'];
  className?: string;
}

export type LoaderStyleProps = {
  $isStatic?: boolean;
  $isJustifyCenter?: boolean;
};
