import { FC, memo, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import List from '@mui/material/List';
import { useTasks } from '@entities/task';
import { Loading, Message } from '@shared/components';
import { TaskItem } from '../TaskItem';
import styles from './TaskList.module.scss';

const TaskList: FC = () => {
  const { t } = useTranslation();
  const { tasks } = useTasks();
  const hasTasks = tasks.length !== 0;

  return (
    <List className={hasTasks ? '' : styles.taskListContainer}>
      <Suspense fallback={<Loading />}>
        {hasTasks ? (
          tasks.map((task) => <TaskItem key={task.id} task={task} />)
        ) : (
          <Message
            text={t('no_tasks_message')}
            iconAriaLabel={t('no_tasks_message')}
            iconName="NoTasks"
          />
        )}
      </Suspense>
    </List>
  );
};

export default memo(TaskList);
