import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Typography, Grid, TextField, Box, Button } from '@material-ui/core';
import { BACK_SUBMIT_VERIFY_URL } from '../../config/endUrl';
import { simpleRequest } from '../../utils/Api';
import { REQUEST_HEADER } from '../../config/defaults';
import { Store } from '../../Store';

const styles = (theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
});

export default function LogMain(props) {
  const { t } = useTranslation();
  const [note, setNote] = useState('');
  const { dispatch } = useContext(Store);
  const [submitted, setSubmitted] = useState(false);

  const remainLength = 250 - note.length;

  const handleSendInformation = async () => {
    const data = {
      request: {
        requestHeader: REQUEST_HEADER,
        data: {
          note
        }
      }
    };

    const response = await simpleRequest(BACK_SUBMIT_VERIFY_URL, data, 'POST', dispatch);

    if (response.status === '0') {
      setSubmitted(true);
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      {!submitted && (
        <Grid container spacing={2} style={{ marginTop: 100, marginBottom: 30 }}>
          <Grid item xs={12}>
            <Box display="inline-flex" justifyContent="center">
              <Typography variant="h5" gutterBottom>
                {t('not_verified')}
              </Typography>
            </Box>
            <Box style={{ marginTop: 30 }}>
              <TextField
                id="verify-request"
                label={t('verify_box_label')}
                multiline
                fullWidth
                autoFocus
                rows={8}
                value={note}
                inputProps={{ maxLength: 250 }}
                variant="outlined"
                onChange={(event) => {
                  setNote(event.target.value);
                }}
              />
            </Box>

            <Grid
              justify="space-between" // Add it here :)
              container
            >
              <Typography variant="caption" display="block" gutterBottom>
                {t('max_note_length')}
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                {t('remain_length')} {remainLength}
              </Typography>
            </Grid>

            <Box style={{ marginTop: 30 }}>
              <Button
                margin="normal"
                fullWidth
                variant="contained"
                color="primary"
                id="submit"
                className={styles.submit}
                size="large"
                onClick={() => {
                  handleSendInformation();
                }}
              >
                {t('verify_button_label')}
              </Button>
            </Box>
          </Grid>
        </Grid>
      )}
      {submitted && (
        <Grid container spacing={2} style={{ marginTop: 100, marginBottom: 30 }}>
          <Grid item xs={12}>
            <Box display="inline-flex" justifyContent="center">
              <Typography variant="h5" gutterBottom>
                {t('submitted_message')}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}
