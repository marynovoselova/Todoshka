import { FC, useContext, memo } from 'react';
import { useTranslation } from 'react-i18next';
import IconButton from '@mui/material/IconButton';
import LanguageContext from '@shared/context/LanguageContext';
import { Icon } from '@shared/components/Icon';
import { Language } from '@shared/types';

const LanguageSwitcher: FC = () => {
  const { t } = useTranslation();
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <IconButton aria-label={t('switch_language')} color="inherit" onClick={toggleLanguage}>
      <Icon iconName={language === Language.EN ? 'En' : 'Ru'} />
    </IconButton>
  );
};

export default memo(LanguageSwitcher);
