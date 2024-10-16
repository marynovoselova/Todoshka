import { memo, FC } from 'react';
import { useTheme } from '@mui/material/styles';
import * as Icons from '@shared/assets/icons';
import { IconProps } from '@shared/types';
import styles from './Icon.module.scss';

const Icon: FC<IconProps> = ({ iconName, ...rest }) => {
  const theme = useTheme();
  const iconStyles = theme.palette.mode === 'dark' ? styles.darkTheme : '';

  const IconMap = {
    Cross: <Icons.Cross className={iconStyles} {...rest} />,
    DarkMode: <Icons.DarkMode {...rest} />,
    Delete: <Icons.Delete className={iconStyles} {...rest} />,
    En: <Icons.En {...rest} />,
    Favorite: <Icons.Favorite className={iconStyles} {...rest} />,
    FavoriteActive: <Icons.FavoriteActive className={iconStyles} {...rest} />,
    Hint: <Icons.Hint className={iconStyles} {...rest} />,
    LightMode: <Icons.LightMode {...rest} />,
    Loading: <Icons.Loading className={iconStyles} {...rest} />,
    Logo: <Icons.Logo className={iconStyles} {...rest} />,
    Pen: <Icons.Pen className={iconStyles} {...rest} />,
    Ru: <Icons.Ru {...rest} />,
  };

  return IconMap[iconName] || null;
};

export default memo(Icon);
