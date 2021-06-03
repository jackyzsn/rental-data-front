import React, { forwardRef, useState, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Typography, Grid, Box } from '@material-ui/core';
import MaterialTable from 'material-table';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import { simpleRequest } from '../../utils/Api';
import { REQUEST_HEADER } from '../../config/defaults';
import { BACK_GET_VERIFY_REQUEST_URL } from '../../config/endUrl';
import { Store } from '../../Store';
import VerifyConfirm from '../common/VerifyConfirm';
import ConfirmData from '../common/ConfirmData';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500
  }
});

export default function LogAdmin(props) {
  const { t } = useTranslation();
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const { state, dispatch } = useContext(Store);
  const [showConfirm, setShowConfirm] = useState(false);
  const [userData, setUserData] = useState({});

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const retrieveVerifyRequest = async () => {
    const data = {
      request: {
        requestHeader: REQUEST_HEADER,
        data: {}
      }
    };

    const response = await simpleRequest(BACK_GET_VERIFY_REQUEST_URL, data, 'POST', dispatch);

    if (response.status === '0' && response.data) {
      dispatch({
        type: 'RETRIEVE_VERIFY_REQUESTS',
        payload: response.data
      });
    }
  };

  useEffect(() => {
    retrieveVerifyRequest();
  }, []);

  const verifyColumns = [
    {
      title: t('avatar'),
      field: 'thumbnail',
      width: '10%',
      render: (rowData) =>
        rowData.thumbnail && (
          <img src={rowData.thumbnail} alt="thumbnail" style={{ width: 40, borderRadius: '50%' }} />
        ),
      filtering: false
    },
    { title: t('first_name'), field: 'firstName', width: '10%' },
    { title: t('last_name'), field: 'lastName', width: '10%' },
    { title: t('email'), field: 'email', width: '10%' },
    { title: t('from_where'), field: 'fromWhere', width: '5%' },
    { title: t('request_note'), field: 'requestNote', width: '35%' },
    {
      title: t('verified'),
      field: 'verified',
      width: '10%',
      lookup: { true: 'true', false: 'false' }
    },
    { title: t('verified_at'), field: 'verifiedAt', width: '10%', filtering: false }
  ];

  const verifyData = state.verifyRequests.map((req) => {
    const content = {};
    content.id = req.id;
    content.thumbnail = req.thumbnail;
    content.firstName = req.firstName;
    content.lastName = req.lastName;
    content.email = req.email;
    content.fromWhere = req.fromWhere;
    content.requestNote = req.requestNote;
    content.verified = req.verified;
    content.verifiedAt = req.verifiedAt;

    return content;
  });

  return (
    <React.Fragment>
      <Container component="main" maxWidth="xl">
        <Grid container spacing={2} style={{ marginBottom: 30 }}>
          <Grid item xs={12}>
            <Grid
              justify="center" // Add it here :)
              container
            >
              <Paper square className={classes.root}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="fullWidth"
                  indicatorColor="primary"
                  textColor="primary"
                  aria-label="icon label tabs example"
                >
                  <Tab icon={<EventAvailableIcon />} label={t('confirm_tab_label')} />
                  <Tab icon={<VerifiedUserIcon />} label={t('verify_tab_label')} />
                </Tabs>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      {value === 1 && (
        <Container component="main" maxWidth="xl">
          <Grid
            justify="center" // Add it here :)
            container
          >
            <Box>
              <MaterialTable
                icons={tableIcons}
                title=""
                localization={{
                  pagination: {
                    labelDisplayedRows: '{from}-{to} of {count}',
                    labelRowsPerPage: t('rows'),
                    firstTooltip: t('first_page'),
                    previousTooltip: t('previous_page'),
                    nextTooltip: t('next_page'),
                    lastTooltip: t('last_page'),
                    labelRowsSelect: t('rows')
                  },
                  toolbar: {
                    nRowsSelected: `{0} t('r_selected')`,
                    searchTooltip: t('search'),
                    searchPlaceholder: t('search')
                  },
                  header: {
                    actions: t('actions')
                  },
                  body: {
                    emptyDataSourceMessage: t('no_records'),
                    filterRow: {
                      filterTooltip: t('filter')
                    }
                  }
                }}
                columns={verifyColumns}
                data={verifyData}
                options={{
                  filtering: true
                }}
                style={{
                  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px'
                }}
                actions={[
                  (rowData) => ({
                    icon: VerifiedUserIcon,
                    disabled: rowData.verified ? true : false,
                    tooltip: t('verify_user'),
                    onClick: (event, rData) => {
                      setUserData(rData);
                      setShowConfirm(true);
                    }
                  })
                ]}
              />
            </Box>
          </Grid>
        </Container>
      )}
      {value === 0 && (
        <Container component="main" maxWidth="lg">
          <Grid
            justify="center" // Add it here :)
            container
          >
            <ConfirmData />
          </Grid>
        </Container>
      )}

      {showConfirm && <VerifyConfirm showConfirm={setShowConfirm} userData={userData} />}
    </React.Fragment>
  );
}
