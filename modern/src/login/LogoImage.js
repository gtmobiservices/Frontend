import React from 'react';
import { makeStyles } from '@mui/styles';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ReactComponent as Logo } from '../resources/images/logo.svg';
import { ReactComponent as OrangeLogo } from '../resources/images/1.svg';

const useStyles = makeStyles(() => ({
  image: {
    alignSelf: 'center',
    maxWidth: '240px',
    maxHeight: '120px',
    width: 'auto',
    height: 'auto',
  },
}));

const LogoImage = ({ color }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    useMediaQuery(theme.breakpoints.down('lg')) ?
      <OrangeLogo className={classes.image} style={{ color }} /> : <Logo className={classes.image} style={{ color }} />
  );
};

export default LogoImage;
