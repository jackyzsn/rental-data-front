import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Typography, Link, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 50
  }
}));

export default function Footer(props) {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <div style={{ marginTop: 5 }}>
        <Box display="flex" justifyContent="center" alignItems="center" bgcolor="text.secondary">
          <Container maxWidth="xs" className={classes.root}>
            <Box display="flex" height="100%" justifyContent="space-between" alignItems="center">
              <Link variant="body1" underline="none" href="/privacy">
                <Typography variant="body1" component="p" style={{ color: 'white' }}>
                  {t('privacy')}
                </Typography>
              </Link>
              <Link variant="body1" underline="none" href="/term">
                <Typography variant="body1" component="p" style={{ color: 'white' }}>
                  {t('term')}
                </Typography>
              </Link>
              <Link variant="body1" underline="none" href="/about">
                <Typography variant="body1" component="p" style={{ color: 'white' }}>
                  {t('contactus')}
                </Typography>
              </Link>
            </Box>
          </Container>
        </Box>
      </div>
    </React.Fragment>
  );
}
