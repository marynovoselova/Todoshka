import { FC, memo, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import List from '@mui/material/List';
import { useTasks } from '@entities/task';
import { Loading } from '@shared/components';
import { TaskItem } from '../TaskItem';
import styles from './TaskList.module.scss';

const TaskList: FC = () => {
  const { t } = useTranslation();
  const { tasks } = useTasks();

  return (
    <List>
      <Suspense fallback={<Loading />}>
        {tasks.length !== 0 ? (
          tasks.map((task) => <TaskItem key={task.id} task={task} />)
        ) : (
          <div className={styles.taskListContainer}>{t('no_tasks_message')}</div>
        )}
      </Suspense>
    </List>
  );
};

export default memo(TaskList);
