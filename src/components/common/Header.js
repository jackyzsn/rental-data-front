import React, { useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import {
  AppBar,
  CssBaseline,
  Container,
  Toolbar,
  Typography,
  Link,
  Box,
  Backdrop,
  CircularProgress,
  Avatar,
  Grid,
  IconButton,
  Drawer,
  Divider,
  List,
  ListItem,
  Button
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Store } from '../../Store';

import { simpleRequest } from '../../utils/Api';
import { REQUEST_HEADER } from '../../config/defaults';
import {
  BACK_GET_SESSION_URL,
  BACK_ADD_SESSION_URL,
  BACK_CLEAR_SESSION_URL
} from '../../config/endUrl';
import logo from '../../../public/assets/images/FindMyHouseLine.png';
import { useCookies } from 'react-cookie';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { RiAdminLine } from 'react-icons/ri';

const drawerWidth = 160;

const useStyles = makeStyles((theme) => ({
  toolbar: {
    flexWrap: 'wrap'
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5),
    '&:hover': {
      color: 'DarkBlue'
    }
  },
  button: {
    margin: theme.spacing(1, 3),
    minWidth: 120
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  appBarD: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main
  }
}));

export default function Header(props) {
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  const { state, dispatch } = useContext(Store);
  const [cookies] = useCookies(['lang']);
  const { innerWidth: width } = window;
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const toDrawer = width < 640 ? true : false;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menus = state.menuList.map((r, index) => (
    <Link
      key={index}
      variant="body1"
      underline="none"
      color="textPrimary"
      href={r.url}
      className={classes.link}
    >
      {t(r.labelKey)}
    </Link>
  ));

  const menusDrawer = state.menuList.map((r, index) => (
    <ListItem key={index}>
      <Link
        key={index}
        variant="body1"
        underline="none"
        color="textPrimary"
        href={r.url}
        className={classes.link}
      >
        {t(r.labelKey)}
      </Link>
    </ListItem>
  ));

  const retrieveSession = async () => {
    const data = {
      request: {
        requestHeader: REQUEST_HEADER,
        data: {}
      }
    };

    const response = await simpleRequest(BACK_GET_SESSION_URL, data, 'POST', dispatch);

    // set state..
    if (response.status === '0' && response.logged && response.user) {
      dispatch({
        type: 'CHANGE_LOG_STATUS',
        payload: true
      });
      dispatch({
        type: 'SET_LOGGED_USER',
        payload: response.user
      });
      dispatch({
        type: 'CHANGE_VERIFY_STATUS',
        payload: response.verified
      });
      dispatch({
        type: 'CHANGE_ADMIN_STATUS',
        payload: response.isAdmin
      });
    } else {
      dispatch({
        type: 'CHANGE_LOG_STATUS',
        payload: false
      });
      dispatch({
        type: 'SET_LOGGED_USER',
        payload: {}
      });
      dispatch({
        type: 'CHANGE_VERIFY_STATUS',
        payload: false
      });
      dispatch({
        type: 'CHANGE_ADMIN_STATUS',
        payload: false
      });
    }
  };

  const addUserSession = async (authCode) => {
    const data = {
      request: {
        requestHeader: REQUEST_HEADER,
        data: {
          authCode
        }
      }
    };

    await simpleRequest(BACK_ADD_SESSION_URL, data, 'POST', dispatch);
  };

  const handleLogout = async () => {
    const data = {
      request: {
        requestHeader: REQUEST_HEADER,
        data: {}
      }
    };

    await simpleRequest(BACK_CLEAR_SESSION_URL, data, 'POST', dispatch);

    await retrieveSession();
  };

  // Only want to execute once
  useEffect(() => {
    const lang = cookies.lang;
    i18n.changeLanguage(lang);
    const authCode = cookies.Authorization;

    async function addRetrieveSessionData(vAuthCode) {
      await addUserSession(vAuthCode);

      await retrieveSession();
    }

    if (authCode) {
      // do api call to create session
      addRetrieveSessionData(authCode);
    } else {
      retrieveSession();
    }
  }, []);

  const menuBar = toDrawer ? (
    <>
      <AppBar
        position="static"
        className={clsx(classes.appBarD, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>

          {state.logged && (
            <Box
              alignItems="center"
              display="inline-flex"
              justifyContent="center"
              className={classes.button}
            >
              {state.isAdmin && (
                <Avatar className={classes.avatar}>
                  <RiAdminLine />
                </Avatar>
              )}
              {state.user.thumbnail && <Avatar alt={state.user.name} src={state.user.thumbnail} />}
              <Box m={0.5}>
                <Typography variant="body1">
                  {t('welcome')} {state.user.name}
                </Typography>
              </Box>
              <Box m={0.5}>
                <Button
                  variant="outlined"
                  color="primary"
                  // style={{ marginTop: 8, minHeight: '56px', minWidth: '200px' }}
                  // onClick={handleSubmitReading}
                >
                  {t('logout')}
                </Button>
              </Box>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List data-testid="menu_container">
          <ListItem key="home">
            <Link
              key="home"
              variant="body1"
              underline="none"
              color="textPrimary"
              href="/"
              className={classes.link}
            >
              {t('home')}
            </Link>
          </ListItem>
          {menusDrawer}
        </List>
      </Drawer>
    </>
  ) : (
    <AppBar position="static" color="transparent" elevation={0} className={classes.appBar}>
      <Container maxWidth="lg">
        <Toolbar className={classes.toolbar}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={2}>
              <Grid container alignItems="center" justify="flex-start" direction="row">
                <Link variant="h6" underline="none" color="inherit" href="/">
                  <img src={logo} alt="House Logo" width="64" height="64" />
                </Link>
              </Grid>
            </Grid>
            <Grid item xs={10}>
              <Grid
                container
                alignItems="center"
                justify="flex-end"
                direction="row"
                data-testid="menu_container"
              >
                {menus}
                {state.logged && (
                  <Box
                    alignItems="center"
                    display="inline-flex"
                    justifyContent="center"
                    className={classes.button}
                  >
                    {state.isAdmin && (
                      <Avatar className={classes.avatar}>
                        <RiAdminLine />
                      </Avatar>
                    )}
                    {state.user.thumbnail && (
                      <Avatar alt={state.user.name} src={state.user.thumbnail} />
                    )}
                    <Box m={0.5}>
                      <Typography variant="body1">
                        {t('welcome')} {state.user.name}
                      </Typography>
                    </Box>
                    <Box m={0.5}>
                      <Button variant="outlined" color="primary" onClick={handleLogout}>
                        {t('logout')}
                      </Button>
                    </Box>
                  </Box>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );

  return (
    <React.Fragment>
      <CssBaseline />

      {menuBar}

      <Backdrop className={classes.backdrop} open={state.loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </React.Fragment>
  );
}
