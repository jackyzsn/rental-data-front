import React, { useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Avatar, useScrollTrigger, Zoom, Fab, Grid, Link, ButtonBase } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import {
  REDIRECT_GOOGLE_SIGN_IN,
  REDIRECT_FACEBOOK_SIGN_IN,
  REDIRECT_GITHUB_SIGN_IN,
  REDIRECT_LINKEDIN_SIGN_IN
} from '../config/endUrl';
import { Store } from '../Store';
import Header from '../components/common/Header';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { useCookies } from 'react-cookie';
import Footer from '../components/common/Footer';
import LogMain from '../components/home/LogMain';
import LogVerified from '../components/home/LogVerified';
import LogAdmin from '../components/home/LogAdmin';
import GithubLogo from '../../public/assets/images/GitHub-Mark-120px-plus.png';
import LinkedinLogo from '../../public/assets/images/LI-In-Bug.png';
import GoogleLogin from '../../public/assets/images/google_signon.png';
import FacebookLogin from '../../public/assets/images/facebook_signin.png';

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
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15
      },
      '& $imageMarked': {
        opacity: 0
      },
      '& $imageTitle': {
        border: '4px solid currentColor'
      }
    }
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%'
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity')
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity')
  }
}));

export default function Home(props) {
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  const { state } = useContext(Store);
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
              <ButtonBase
                focusRipple
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                style={{
                  width: '520px',
                  height: '100px',
                  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px'
                }}
                onClick={() => {
                  window.location = REDIRECT_GOOGLE_SIGN_IN;
                }}
              >
                <span
                  className={classes.imageSrc}
                  style={{
                    backgroundImage: `url(${GoogleLogin})`
                  }}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} style={{ marginTop: 80, marginBottom: 30 }}>
              <ButtonBase
                focusRipple
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                style={{
                  width: '520px',
                  height: '100px',
                  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px'
                }}
                onClick={() => {
                  window.location = REDIRECT_FACEBOOK_SIGN_IN;
                }}
              >
                <span
                  className={classes.imageSrc}
                  style={{
                    backgroundImage: `url(${FacebookLogin})`
                  }}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} style={{ marginTop: 80, marginBottom: 50 }}>
              <Grid
                container
                justifyContent="center"
                alignContent="center"
                justify="center"
                direction="row"
              >
                <Link
                  href="#"
                  onClick={() => {
                    window.location = REDIRECT_GITHUB_SIGN_IN;
                  }}
                  style={{ marginLeft: 20, marginRight: 20 }}
                >
                  <img src={GithubLogo} alt="Github Logo" height="64" />
                </Link>

                <Link
                  href="#"
                  onClick={() => {
                    window.location = REDIRECT_LINKEDIN_SIGN_IN;
                  }}
                  style={{ marginLeft: 20, marginRight: 20 }}
                >
                  <img src={LinkedinLogo} alt="Linkedin Logo" height="64" />
                </Link>
              </Grid>
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
