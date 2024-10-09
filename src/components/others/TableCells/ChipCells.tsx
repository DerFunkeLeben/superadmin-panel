import { FC } from 'react';
import { Chip } from '@mui/material';

import { AnyEntity } from '@/redux/types';

interface ChipCellsProps {
  valueArr: AnyEntity[] | undefined;
  labelKey?: string;
}

const ChipCells: FC<ChipCellsProps> = ({ valueArr, labelKey = 'name' }) => {
  return (
    <div
      style={{
        display: 'flex',
        padding: '10px 0',
        flexWrap: 'wrap',
        gap: 4,
        overflow: 'auto',
        boxSizing: 'border-box',
        height: '100%',
        alignItems: 'center',
      }}
    >
      {valueArr?.map((value) => {
        return <Chip key={value.id} sx={{ minWidth: 'min-content' }} label={value[labelKey]} />;
      })}
    </div>
  );
};

export default ChipCells;
