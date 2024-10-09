import { FC, ReactNode } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

interface ICardWrapper {
  children: ReactNode;
}

const CardWrapper: FC<ICardWrapper> = ({ children }) => {
  return (
    <Card sx={{ overflow: 'auto' }}>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
export default CardWrapper;
