import React, { useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Avatar, useScrollTrigger, Zoom, Fab, Button, Grid } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { REDIRECT_GOOGLE_SIGN_IN, REDIRECT_FACEBOOK_SIGN_IN } from '../config/endUrl';
import { Store } from '../Store';
import Header from '../components/common/Header';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { useCookies } from 'react-cookie';
import Footer from '../components/common/Footer';
import FacebookIcon from '@material-ui/icons/Facebook';
import { FaGooglePlus } from 'react-icons/fa';
import LogMain from '../components/home/LogMain';
import LogVerified from '../components/home/LogVerified';
import LogAdmin from '../components/home/LogAdmin';

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
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  },
  rootAbsolute: {
    paddingLeft: 80,
    paddingRight: 45,
    position: 'relative',

    '& .MuiButton-sizeSmall': {
      paddingLeft: 48,
      paddingRight: 32,
      position: 'absolute',
      left: 16
    },
    '& .MuiButton-startIcon': {
      position: 'absolute',
      left: 64
    }
  }
}));

export default function Home(props) {
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  const { state, dispatch } = useContext(Store);
  const [cookies, setCookie] = useCookies(['lang']);

  const lang = cookies.lang ? cookies.lang : 'en';
  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
    setCookie('lang', event.target.value, { path: '/' });
  };

  function ScrollTop(props) {
    const { children, window } = props;
    const vClasses = useStyles();
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
        <div onClick={handleClick} role="presentation" className={vClasses.root}>
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
      {!state.logged && (
        <Container component="main" maxWidth="sm">
          <Grid container spacing={2} style={{ marginTop: 100, marginBottom: 30 }}>
            <Grid item xs={12}>
              <Button
                margin="normal"
                fullWidth
                variant="contained"
                className={classes.rootAbsolute}
                onClick={() => {
                  window.location = REDIRECT_GOOGLE_SIGN_IN;
                }}
                startIcon={<FaGooglePlus style={{ transform: 'scale(2.2)', color: '#DB4437' }} />}
                style={{
                  minHeight: '100px',
                  backgroundColor: '#FFFFFF',
                  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px',
                  fontSize: '28px'
                }}
              >
                {t('sign_in_google')}
              </Button>
            </Grid>
            <Grid item xs={12} style={{ marginTop: 80, marginBottom: 200 }}>
              <Button
                margin="normal"
                fullWidth
                variant="contained"
                className={classes.rootAbsolute}
                startIcon={<FacebookIcon style={{ transform: 'scale(2.2)', color: '#4267B2' }} />}
                onClick={() => {
                  window.location = REDIRECT_FACEBOOK_SIGN_IN;
                }}
                style={{
                  minHeight: '100px',
                  backgroundColor: '#FFFFFF',
                  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px',
                  fontSize: '28px'
                }}
              >
                {t('sign_in_facebook')}
              </Button>
            </Grid>
          </Grid>
        </Container>
      )}

      {state.logged &&
        (state.isAdmin ? <LogAdmin /> : state.verified ? <LogVerified /> : <LogMain />)}

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
