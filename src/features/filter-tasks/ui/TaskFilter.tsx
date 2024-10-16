import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonGroup } from '@mui/material';
import { TaskFilter as TaskFilterEnum } from '@shared/types';
import useFilter from '../hooks/useFilter';

const TaskFilter: FC = () => {
  const { t } = useTranslation();
  const { currentFilter, changeFilter } = useFilter();

  const filters = [
    { key: TaskFilterEnum.All, label: t('all') },
    { key: TaskFilterEnum.Active, label: t('active') },
    { key: TaskFilterEnum.Favorite, label: t('favorite') },
    { key: TaskFilterEnum.Completed, label: t('completed') },
  ];

  return (
    <ButtonGroup color="primary" variant="text">
      {filters.map((filter) => (
        <Button
          key={filter.key}
          onClick={() => changeFilter(filter.key)}
          aria-label={t(filter.label)}
          sx={currentFilter !== filter.key ? { color: 'text.primary' } : { fontWeight: 'bold' }}
        >
          {filter.label}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default memo(TaskFilter);
