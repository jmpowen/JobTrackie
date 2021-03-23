import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles({
  root: {
    margin: 5,
    display: 'inline-block',
  },
  selectField: {
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

export default function AlertSelectDocument({ alert, label, value, onChange, selectItems, newDocType, handleUpload }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FormControl className={classes.selectField}>
        <InputLabel>{label}</InputLabel>
        <Select value={value} onChange={onChange}>
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          {selectItems && selectItems.map(sItem => (
            <MenuItem value={sItem}>
              {sItem}
            </MenuItem>
          ))}
          <MenuItem value={newDocType}>
            <FormControl>
              <Input type='file' onChange={handleUpload} variant='outlined' />
            </FormControl>
          </MenuItem>
        </Select>
      </FormControl>
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