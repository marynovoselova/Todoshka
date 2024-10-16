import { FC, memo } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { ThemeSwitcher } from '@shared/components/ThemeSwitcher';
import { LanguageSwitcher } from '@shared/components/LanguageSwitcher';
import { Icon } from '@shared/components/Icon';

const Header: FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'background.paper',
        boxShadow: '0 0 5px 0 #999999',
        marginBottom: '16px',
      }}
    >
      <Toolbar>
        <Icon iconName="Logo" />
        <Typography
          sx={{
            flexGrow: 1,
            fontWeight: 100,
            color: 'text.primary',
            marginLeft: '2px',
          }}
        >
          Todoshka
        </Typography>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </Toolbar>
    </AppBar>
  );
};

export default memo(Header);
