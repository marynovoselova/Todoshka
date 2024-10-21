import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import { Message } from '@shared/components';
import styles from './ErrorMessage.module.scss';

const ErrorMessage: FC = () => {
  const { t } = useTranslation();

  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className={styles.container} role="alert">
      <Message
        text={t('something_went_wrong')}
        iconName="Error"
        iconAriaLabel={t('something_went_wrong')}
      />
      <Button variant="contained" color="primary" onClick={handleRetry}>
        {t('try_again')}
      </Button>
    </div>
  );
};

export default ErrorMessage;
