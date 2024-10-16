import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import IconButton from '@mui/material/IconButton';
import { useThemeContext } from '@shared/context';
import { Icon } from '@shared/components/Icon';
import { ThemeMode } from '@shared/types';

const ThemeSwitcher: FC = () => {
  const { t } = useTranslation();
  const { toggleTheme, mode } = useThemeContext();
  const isLightMode = mode === ThemeMode.Light;

  return (
    <IconButton
      aria-label={isLightMode ? t('switch_to_dark_theme') : t('switch_to_light_theme')}
      color="inherit"
      onClick={toggleTheme}
    >
      <Icon iconName={isLightMode ? 'DarkMode' : 'LightMode'} />
    </IconButton>
  );
};

export default memo(ThemeSwitcher);
