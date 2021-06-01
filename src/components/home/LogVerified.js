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
  Button
} from '@material-ui/core';
import { simpleRequest } from '../../utils/Api';
import { REQUEST_HEADER } from '../../config/defaults';
import { BACK_GET_PROPERTY_INFO_URL } from '../../config/endUrl';
import { Store } from '../../Store';
import { waterMeterPending, waterMeterAccepted } from '../../utils/utility';
import moment from 'moment';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US')
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US')
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2)
  }
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767)
];

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
  const { innerWidth: width, innerHeight: height } = window;
  const [submitReading, setSubmitReading] = useState(true);
  const [reportMonth, setReportMonth] = useState('');
  const [meterReading, setMeterReading] = useState('');
  const [meterError, setMeterError] = useState(false);
  const [meterLabel, setMeterLabel] = useState('meter_reading');
  const [helpText, setHelpText] = useState('valid_reading');

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
    setMeterError(true);
    setMeterLabel('error');
    setHelpText('invalid_reading');
  };

  return (
    <Container component="main" maxWidth="md">
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
          />
        </Paper>
      </Grid>
    </Container>
  );
}
