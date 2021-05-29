import React, { useEffect, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Avatar, useScrollTrigger, Zoom, Fab } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Dummy from './Dummy';
import { DEAULT_MENU_LIST, REQUEST_HEADER } from '../config/defaults';
import {
  BACK_GET_MARKETING_CONTENT,
  BACK_ADD_SESSION_URL,
  BACK_GET_SESSION_URL
} from '../config/endUrl';
import { Store } from '../Store';
import Header from '../components/common/Header';
import { simpleRequest } from '../utils/Api';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { useCookies } from 'react-cookie';
import Footer from '../components/common/Footer';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  carouselBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}));

export default function Home(props) {
  const { i18n } = useTranslation();
  const classes = useStyles();
  const { dispatch } = useContext(Store);
  const params = new URLSearchParams(window.location.search);
  const uuid = params.get('uuid');
  const [cookies, setCookie] = useCookies(['lang']);

  const lang = cookies.lang ? cookies.lang : 'en';
  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
    setCookie('lang', event.target.value, { path: '/' });
  };

  function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100
    });

    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };

    return (
      <Zoom in={trigger}>
        <div onClick={handleClick} role="presentation" className={classes.root}>
          {children}
        </div>
      </Zoom>
    );
  }

  // Only want to execute once
  useEffect(() => {}, []);

  return (
    <div>
      <div id="back-to-top-anchor"></div>
      <Header />
      <Dummy />

      <Container component="main" maxWidth="sm">
        <CssBaseline />

        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <div onChange={changeLanguage} data-testid="language_radio">
            <input type="radio" value="en" name="language" checked={lang === 'en'} />
            English
            <input type="radio" value="zh_TW" name="language" checked={lang === 'zh_TW'} />
            中文
          </div>
        </div>
      </Container>
      <Footer />
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
}
