import React, { forwardRef, useState, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, DialogActions, Button, Snackbar, Dialog, DialogTitle } from '@material-ui/core';
import MaterialTable from 'material-table';
import { simpleRequest } from '../../utils/Api';
import { REQUEST_HEADER } from '../../config/defaults';
import { BACK_CONFIRM_READING_URL, BACK_ADMIN_GET_PROPERTY_INFO_URL } from '../../config/endUrl';
import { Store } from '../../Store';
import {
  waterMeterPending,
  waterMeterAccepted,
  convertAcceptedForDisplay
} from '../../utils/utility';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import Alert from '@material-ui/lab/Alert';

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

export default function UseMeterInfo(props) {
  const { t } = useTranslation();
  const { row } = props;

  const { state, dispatch } = useContext(Store);
  const [meterData, setMeterData] = useState({});
  const [open, setOpen] = React.useState(false);
  const [successMessageOpen, setSuccessMessageOpen] = useState(false);
  const [reload, setReload] = useState(0);

  const handleClose = () => {
    setOpen(false);
  };

  const confirmReading = async () => {
    const data = {
      request: {
        requestHeader: REQUEST_HEADER,
        data: {
          authUserId: row.id,
          month: meterData.month
        }
      }
    };

    await simpleRequest(BACK_CONFIRM_READING_URL, data, 'POST', dispatch);

    setOpen(false);
    setSuccessMessageOpen(true);

    setReload(reload + 1);
  };

  const retrieveVerifyRequest = async (authUserId) => {
    const data = {
      request: {
        requestHeader: REQUEST_HEADER,
        data: {
          authUserId: authUserId
        }
      }
    };

    const response = await simpleRequest(BACK_ADMIN_GET_PROPERTY_INFO_URL, data, 'POST', dispatch);

    if (response.status === '0' && response.data) {
      dispatch({
        type: 'RETRIEVE_PROPERTY_INFO',
        payload: response.data
      });
    }
  };

  useEffect(() => {
    retrieveVerifyRequest(row.id);
  }, [reload]);

  const verifyColumns = [
    { title: t('report_month'), field: 'month', width: '10%' },
    { title: t('reading'), field: 'reading', width: '20%' },
    { title: t('usage_since'), field: 'usage', width: '20%' },
    { title: t('entered_at'), field: 'enteredAt', width: '20%' },
    {
      title: t('accept_flag'),
      field: 'acceptFlag',
      width: '10%',
      lookup: { Yes: 'Yes', No: 'No' }
    },
    { title: t('accept_at'), field: 'acceptedAt', width: '20%', filtering: false }
  ];

  const dataLoaded = state.propertyInfo.data;

  const pendingEntries = dataLoaded ? waterMeterPending(state.propertyInfo.data.waterMeter) : [];
  const acceptedEntries = dataLoaded ? waterMeterAccepted(state.propertyInfo.data.waterMeter) : [];
  const verifyData = convertAcceptedForDisplay(pendingEntries.concat(acceptedEntries), false);

  return (
    <React.Fragment>
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
              icon: AssignmentTurnedInIcon,
              disabled: rowData.acceptFlag === 'Yes' ? true : false,
              tooltip: t('confirm_reading'),
              onClick: (event, rData) => {
                setMeterData(rData);
                setOpen(true);
              }
            })
          ]}
        />
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{t('do_you_confirm')}</DialogTitle>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {t('no')}
          </Button>
          <Button onClick={confirmReading} color="primary" autoFocus>
            {t('yes')}
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        autoHideDuration={3000}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={successMessageOpen}
        onClose={() => {
          setSuccessMessageOpen(false);
        }}
      >
        <Alert
          onClose={() => {
            setSuccessMessageOpen(false);
          }}
          severity="success"
        >
          {t('success_confirm')}
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
}
