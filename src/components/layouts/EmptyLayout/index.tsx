import { FC } from 'react';

import { EmptyLayoutProps } from './types';
import { Root } from './styles';

const EmptyLayout: FC<EmptyLayoutProps> = (props) => {
  const { style, children } = props;

  return <Root style={style}>{children}</Root>;
};
export default EmptyLayout;
