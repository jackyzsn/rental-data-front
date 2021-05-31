import React, { useState, useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

import { BACK_VERIFY_USER_URL } from '../../config/endUrl';
import { REQUEST_HEADER } from '../../config/defaults';
import { simpleRequest } from '../../utils/Api';
import { Store } from '../../Store';
import moment from 'moment';

const styles = (theme) => ({
  root: {
    margin: 5,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  },
  button: {
    margin: theme.spacing(1)
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          iconstyle={classes.largeIcon}
          onClick={onClose}
        >
          <CloseIcon style={{ fontSize: 40 }} />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

export default function VerifyConfirm(props) {
  const { t } = useTranslation();
  const { state, dispatch } = useContext(Store);
  const [propertyInfo, setPropertyInfo] = useState('');
  const [verifyDisabled, setVerifyDisabled] = useState(true);
  const { showConfirm, userData } = props;

  const handleClose = () => {
    showConfirm(false);
  };

  const updateUserToVerified = async (authUserId, property) => {
    const data = {
      request: {
        requestHeader: REQUEST_HEADER,
        data: {
          authUserId: authUserId,
          propertyInfo: property
        }
      }
    };

    await simpleRequest(BACK_VERIFY_USER_URL, data, 'POST', dispatch);
  };

  const setCurrentUserVerified = async (data) => {
    await updateUserToVerified(data.id, propertyInfo);

    var updateRequests = state.verifyRequests.map((req) => {
      if (req.id === data.id) {
        req.verified = true;
        req.verifiedAt = moment().format();
      }
      return req;
    });

    dispatch({
      type: 'RETRIEVE_VERIFY_REQUESTS',
      payload: updateRequests
    });
  };

  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={true}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}></DialogTitle>
        <DialogContent>
          <CssBaseline />
          <Container maxWidth="lg">
            <Typography variant="h5" gutterBottom>
              {t('confirm_user')}
            </Typography>
            <Grid container spacing={2} style={{ marginTop: 20 }}>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  {t('for_user')}
                  {userData.firstName} {userData.lastName}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="propertyInfo"
                  label={t('propertyInfo')}
                  name="propertyInfo"
                  autoFocus
                  multiline
                  rows={3}
                  value={propertyInfo}
                  onChange={(event) => {
                    setPropertyInfo(event.target.value);
                    if (event.target.value.length > 0) {
                      setVerifyDisabled(false);
                    } else {
                      setVerifyDisabled(true);
                    }
                  }}
                />
              </Grid>

              <Grid item xs={12} style={{ marginBottom: 20 }}>
                <Button
                  margin="normal"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={styles.submit}
                  size="large"
                  disabled={verifyDisabled}
                  onClick={() => {
                    setCurrentUserVerified(userData);
                    handleClose();
                  }}
                >
                  {t('verify_current_user')}
                </Button>
              </Grid>
            </Grid>
          </Container>
        </DialogContent>
      </Dialog>
    </div>
  );
}
