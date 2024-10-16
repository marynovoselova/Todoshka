import { FC, memo } from 'react';
import { Icon } from '../Icon';
import styles from './Loading.module.scss';

const Loading: FC = () => {
  return <Icon className={styles.loadingCircle} iconName="Loading" />;
};

export default memo(Loading);
