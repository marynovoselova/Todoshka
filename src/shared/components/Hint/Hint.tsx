import { FC, ReactNode, memo } from 'react';
import { Tooltip } from '@mui/material';
import { Icon } from '@shared/components';

const Hint: FC<{ label: string; text: ReactNode }> = ({ label, text }) => {
  return (
    <Tooltip title={text}>
      <div aria-label={label} style={{ marginRight: '5px' }}>
        <Icon iconName="Hint" />
      </div>
    </Tooltip>
  );
};

export default memo(Hint);
