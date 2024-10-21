import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';
import { Icon } from '@shared/components';
import { MessageProps } from '@shared/types';
import styles from './Message.module.scss';

const Message: FC<MessageProps> = ({ text, iconName, iconAriaLabel }) => {
  const { t } = useTranslation();
  const { palette } = useTheme();
  const messageStyles =
    palette.mode === 'dark' ? styles.messageContainerDark : styles.messageContainerLight;

  return (
    <div className={messageStyles}>
      <Icon
        iconName={iconName}
        aria-label={`${iconAriaLabel} ${t('image')}}`}
        className={styles.messageImage}
      />
      <p aria-label={iconAriaLabel}>{text}</p>
    </div>
  );
};

export default Message;
