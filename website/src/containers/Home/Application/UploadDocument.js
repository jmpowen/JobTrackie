import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import Card from '@material-ui/core/Card';
import Alert from '@material-ui/lab/Alert';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  root: {},
  firstDiv: {
    height: '30px',
  },
  inputItems: {
    padding: '10px',
  },
  statusDiv: {
    textAlign: 'center',
    width: '100%',
  },
  alert: {
    display: 'inline-block',
    width: '150px',
    marginTop: 14,
  },
  submitButton: {
    backgroundColor: '#a6a298',
    color: 'black',
    width: '100%',
    justifyContent: 'center',
  },
})

export default function UploadDocument(props) {
  const { handleClose, documents, setDocuments } = props;
  const classes = useStyles();

  const [values, setValues] = useState({
    type: 'resume',
    document: null,
    name: '',
    version: ''
  })

  const [alerts, setAlerts] = useState({
    document: false,
    name: false
  })

  const handleAddNewDocument = () => {
    let aDocument = values.document === null;
    let aName = values.name === '';

    setAlerts({
      document: aDocument,
      name: aName
    })

    if (aDocument || aName) {
      // Alerts here
      return;
    }


  }

  const handleUpload = (e) => {
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
  };

  return (
    <>
      <Card className={classes.root}>
        <div className={classes.inputItems}>
            <FormControl>
              <Input type='file' onChange={handleUpload} variant='outlined' />
            </FormControl>
        </div>
        <div>
          <TextField
            className={classes.inputItems}
            label='Document Name'
            variant='filled'
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
          {alerts.document ? (
            <div className={classes.alert}>
              <Alert severity='error'>Input invalid</Alert>
            </div>
          ) : (
            <div className={classes.alert}></div>
          )}
          <TextField
            className={classes.inputItems}
            label='Version'
            variant='filled'
            value={values.version}
            onChange={(e) => setValues({ ...values, version: e.target.value })}
          />
        </div>
        <div className={classes.statusDiv}>
          <FormControl component='fieldset'>
            <RadioGroup
              row
              aria-label='doc'
              name='doc'
              value={values.type}
              onChange={(e) => setValues({ ...values, type: e.target.value })}
            >
              <FormControlLabel
                value='cover'
                control={<Radio />}
                label='Cover Letter'
              />
              <FormControlLabel
                value='resume'
                control={<Radio />}
                label='Resume'
              />
              <FormControlLabel
                value='other'
                control={<Radio />}
                label='Other'
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div>
          <Button
            className={classes.submitButton}
            onClick={handleAddNewDocument}
          >
            Submit
          </Button>
        </div>
      </Card>
    </>
  )
}