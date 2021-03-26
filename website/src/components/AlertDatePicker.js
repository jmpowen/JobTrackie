import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles({
  root: {
    margin: 5,
    display: 'inline-block',
  },
  dateField: {
    width: 200,
    margin: 5
  },
  alert: {
    display: 'inline-block',
    width: 53,
    marginTop: 10,
    margin: 5
  }
})

export default function AlertDatePicker({ value, onChange, alert }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          className={classes.dateField}
          disableToolbar
          variant='inline'
          format='MM/dd/yyyy'
          margin='normal'
          id='date-picker-inline'
          label='Date picker inline'
          value={value}
          onChange={onChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>
      {alert ? (
        <div className={classes.alert}>
          <Alert severity='error' />
        </div>
      ) : (
        <div className={classes.alert}></div>
      )}
    </div>
  )
}