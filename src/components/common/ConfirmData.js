import React, { useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Badge from '@material-ui/core/Badge';
import { useTranslation } from 'react-i18next';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import { deepPurple } from '@material-ui/core/colors';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import UseMeterInfo from './UseMeterInfo';
import { Store } from '../../Store';

const useRowStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      borderBottom: 'unset'
    }
  },
  container: {
    maxHeight: 440
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500]
  }
}));

function Row(props) {
  const { row, setExpanded } = props;
  const classes = useRowStyles();

  const nameAbv = (row.firstName.substring(0, 1) + row.lastName.substring(0, 1)).toUpperCase();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => {
              setExpanded(!row.expanded);
            }}
          >
            {row.expanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.unprocess ? (
            <Badge color="secondary" variant="dot">
              {row.avatar ? (
                <img src={row.avatar} alt="thumbnail" style={{ width: 40, borderRadius: '50%' }} />
              ) : (
                <Avatar className={classes.purple}>{nameAbv}</Avatar>
              )}
            </Badge>
          ) : row.avatar ? (
            <img src={row.avatar} alt="thumbnail" style={{ width: 40, borderRadius: '50%' }} />
          ) : (
            <Avatar className={classes.purple}>{nameAbv}</Avatar>
          )}
        </TableCell>
        <TableCell align="center">{row.firstName}</TableCell>
        <TableCell align="center">{row.lastName}</TableCell>
        <TableCell align="center">{row.email}</TableCell>
        <TableCell align="center">{row.fromWhere}</TableCell>
        <TableCell align="center">{row.propertyInfo}</TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={row.expanded} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <UseMeterInfo row={row} />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function ConfirmData(props) {
  const { t } = useTranslation();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const { state, dispatch } = useContext(Store);

  const rows = state.verifyRequests
    ? state.verifyRequests.map((item) => ({
        id: item.id,
        avatar: item.thumbnail,
        firstName: item.firstName,
        lastName: item.lastName,
        email: item.email,
        fromWhere: item.fromWhere,
        propertyInfo: item.propertyInfo,
        unprocess: item.unprocess
      }))
    : [];

  const [data, setData] = React.useState(rows);
  const setExpanded = (index) => (value) => {
    setData(rows.map((row, i) => ({ ...row, expanded: index === i ? value : false })));
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {}, []);

  return (
    <TableContainer
      component={Paper}
      style={{
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px'
      }}
    >
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="center">{t('avatar')}</TableCell>
            <TableCell align="center">{t('first_name')}</TableCell>
            <TableCell align="center">{t('last_name')}</TableCell>
            <TableCell align="center">{t('email')}</TableCell>
            <TableCell align="center">{t('from_where')}</TableCell>
            <TableCell align="center">{t('property_info')}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
            <Row key={row.id} row={row} expanded={false} setExpanded={setExpanded(index)} />
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}
