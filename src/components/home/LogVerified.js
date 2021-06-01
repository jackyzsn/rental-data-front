import React, { useEffect, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Grid,
  Typography,
  Box,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Snackbar
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { simpleRequest } from '../../utils/Api';
import { REQUEST_HEADER } from '../../config/defaults';
import { BACK_GET_PROPERTY_INFO_URL, BACK_SUBMIT_WATER_READING_URL } from '../../config/endUrl';
import { Store } from '../../Store';
import {
  waterMeterPending,
  waterMeterAccepted,
  readingIsValid,
  convertAcceptedForDisplay
} from '../../utils/utility';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  root: {
    width: '100%'
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 180
  }
}));

export default function LogVerified(props) {
  const { t } = useTranslation();
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const { state, dispatch } = useContext(Store);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const { innerHeight: height } = window;
  const [reportMonth, setReportMonth] = useState(moment().format('YYYY-MM'));
  const [meterReading, setMeterReading] = useState('');
  const [meterError, setMeterError] = useState(false);
  const [meterLabel, setMeterLabel] = useState('meter_reading');
  const [helpText, setHelpText] = useState('valid_reading');
  const [open, setOpen] = useState(false);

  const columns = [
    { id: 'month', label: t('report_month'), minWidth: 170, align: 'center' },
    {
      id: 'reading',
      label: t('reading'),
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
      minWidth: 100
    },
    {
      id: 'usage',
      label: t('usage_since'),
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
      minWidth: 100
    },
    {
      id: 'enteredAt',
      label: t('entered_at'),
      minWidth: 170,
      align: 'center'
    },
    {
      id: 'acceptFlag',
      label: t('accept_flag'),
      minWidth: 170,
      align: 'center'
    },
    {
      id: 'acceptAt',
      label: t('accept_at'),
      minWidth: 170,
      align: 'center'
    }
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const retrievePropertyInfo = async () => {
    const data = {
      request: {
        requestHeader: REQUEST_HEADER,
        data: {}
      }
    };

    const response = await simpleRequest(BACK_GET_PROPERTY_INFO_URL, data, 'POST', dispatch);

    if (response.status === '0' && response.data) {
      dispatch({
        type: 'RETRIEVE_PROPERTY_INFO',
        payload: response.data
      });
    }
  };

  const submitMeterReading = async (month, reading) => {
    const data = {
      request: {
        requestHeader: REQUEST_HEADER,
        data: {
          month,
          reading
        }
      }
    };

    simpleRequest(BACK_SUBMIT_WATER_READING_URL, data, 'POST', dispatch);
  };

  useEffect(() => {
    retrievePropertyInfo();
  }, []);

  const dataLoaded = state.propertyInfo.data;

  const pendingEntries = dataLoaded ? waterMeterPending(state.propertyInfo.data.waterMeter) : [];
  const hasPending = pendingEntries.length > 0;
  const pendingEntry = hasPending ? pendingEntries[0] : null;
  const acceptedEntries = dataLoaded ? waterMeterAccepted(state.propertyInfo.data.waterMeter) : [];

  const thisMonth = moment().format('YYYY-MM');
  const previousMonth = moment().subtract(1, 'months').format('YYYY-MM');

  const rows = convertAcceptedForDisplay(acceptedEntries);

  var element;
  var reportMonthType;
  if (hasPending) {
    element = (
      <TextField
        variant="outlined"
        margin="normal"
        required
        id="month"
        label={t('meter_month')}
        name="meter_month"
        value={pendingEntry.month}
        disabled
      />
    );
    reportMonthType = 2;
  } else if (
    acceptedEntries.length === 0 ||
    (acceptedEntries.length > 0 && acceptedEntries[0].month === previousMonth)
  ) {
    element = (
      <TextField
        variant="outlined"
        margin="normal"
        required
        id="month"
        label={t('meter_month')}
        name="meter_month"
        value={thisMonth}
        disabled
      />
    );
    reportMonthType = 0;
  } else if (acceptedEntries.length > 0 && acceptedEntries[0].month === thisMonth) {
    element = <></>;
    reportMonthType = -1;
  } else if (acceptedEntries.length > 0 && acceptedEntries[0].month < previousMonth) {
    element = (
      <React.Fragment>
        <InputLabel id="select-report-month">{t('meter_month')}</InputLabel>
        <Select
          labelId="select-report-month"
          id="select-report-month-id"
          value={reportMonth}
          variant="outlined"
          onChange={(event) => {
            setReportMonth(event.target.value);
          }}
          style={{ marginTop: 16 }}
        >
          <MenuItem value={thisMonth}>{thisMonth}</MenuItem>
          <MenuItem value={previousMonth}>{previousMonth}</MenuItem>
        </Select>
      </React.Fragment>
    );
    reportMonthType = 1;
  }

  const handleSubmitReading = () => {
    if (!readingIsValid(meterReading, acceptedEntries)) {
      setMeterError(true);
      setMeterLabel('error');
      setHelpText('invalid_reading');
    } else {
      var vMonth;
      if (reportMonthType === 1) {
        vMonth = reportMonth;
      } else if (reportMonthType === 0) {
        vMonth = thisMonth;
      } else if (reportMonthType === 2) {
        vMonth = pendingEntry.month;
      }
      submitMeterReading(vMonth, meterReading);
      setOpen(true);
    }
  };

  return (
    <Container component="main" maxWidth="lg">
      <Box display="inline-flex" justifyContent="center" style={{ marginTop: 30 }}>
        <Typography variant="h5" gutterBottom>
          {state.propertyInfo.description}
        </Typography>
      </Box>
      <Grid container spacing={2} style={{ marginTop: 30, marginBottom: 30 }}>
        <Paper square className={classes.root}>
          <Grid
            justify="center"
            container
            alignItems="center"
            style={{ marginTop: 30, marginBottom: 30 }}
          >
            <Grid item xs={4}>
              <Box display="flex" justifyContent="center" width="100%">
                <FormControl className={classes.formControl}>{element}</FormControl>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box display="flex" justifyContent="center" width="100%">
                <FormControl className={classes.formControl}>
                  <TextField
                    variant="outlined"
                    error={meterError}
                    margin="normal"
                    required
                    id="reading"
                    label={t(meterLabel)}
                    name="meter_reading"
                    value={meterReading}
                    disabled={reportMonthType === -1}
                    helperText={t(helpText)}
                    onChange={(event) => {
                      setMeterReading(event.target.value);
                      setMeterError(false);
                      setMeterLabel('meter_reading');
                      setHelpText('valid_reading');
                    }}
                  />
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box display="flex" justifyContent="center" width="100%">
                <Button
                  variant="outlined"
                  color="primary"
                  style={{ marginTop: 8, minHeight: '56px', minWidth: '200px' }}
                  onClick={handleSubmitReading}
                  disabled={reportMonthType === -1}
                >
                  {t('submit_reading')}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <Grid justify="center" container>
        <Paper
          className={classes.root}
          style={{
            boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px'
          }}
        >
          <TableContainer style={{ maxHeight: height * 0.6 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            labelRowsPerPage={t('rows_per_page')}
            labelDisplayedRows={({ from, to, count }) => `${from}-${to} ${t('of')} ${count}`}
          />
        </Paper>
      </Grid>

      <Snackbar
        autoHideDuration={3000}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Alert
          onClose={() => {
            setOpen(false);
          }}
          severity="success"
        >
          {t('success_submit')}
        </Alert>
      </Snackbar>
    </Container>
  );
}
