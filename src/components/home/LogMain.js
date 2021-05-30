import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Typography, Grid } from '@material-ui/core';

export default function LogMain(props) {
  const { t } = useTranslation();

  return (
    <Container component="main" maxWidth="xl">
      <Grid container spacing={2} style={{ marginTop: 100, marginBottom: 30 }}>
        <Grid item xs={12}>
          <Typography variant="h2" component="h2">
            You are logged in..
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
