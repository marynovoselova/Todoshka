import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import styles from './ErrorMessage.module.scss';

const ErrorMessage: FC = () => {
  const { t } = useTranslation();

  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className={styles.container} role="alert">
      <h1 className={styles.message}>{t('something_went_wrong')}</h1>
      <Button variant="contained" color="primary" onClick={handleRetry}>
        {t('try_again')}
      </Button>
    </div>
  );
};

export default ErrorMessage;
