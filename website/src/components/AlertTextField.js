import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles({
  root: {
    margin: 5,
    display: 'inline-block',
  },
  textField: {
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

export default function AlertTextField({ alert, label, value, onChange }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField
        className={classes.textField}
        label={label}
        value={value}
        onChange={onChange}
        variant='filled'
      />
      {alert ? (
        <div className={classes.alert}>
          <Alert severity='error' />
        </div>
      ) : (
        <div className={classes.alert} />
      )}
    </div>
  )
}