import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';

import {
  isNullOrNaNOrLessThanOrEqualToZero,
  isNullOrEmptyOrWhitespace,
  isNullOrEmpty,
} from '../../../helpers/inputs';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {},
  firstDiv: {
    height: '30px',
  },
  inputItems: {
    padding: '10px',
  },
  statusDiv: {
    display: 'flex',
  },
  submitButton: {
    backgroundColor: '#a6a298',
    color: 'black',
    width: '100%',
    justifyContent: 'center',
  },
});

export default function AddNewApplication(props) {
  const { handleClose, applicationItems, setApplicationItems } = props;
  const classes = useStyles();

  const [values, setValues] = useState({
    company: '',
    role: '',
    date: `${new Date().toDateString()}`,
    coverLetter: null,
    resume: null,
    otherDocs: null,
    status: '',
  });

  const [alerts, setAlerts] = useState({
    company: false,
    role: false,
    date: false,
    coverLetter: false,
    resume: false,
    otherDocs: false,
    status: false,
  });

  const handleAddNewApplication = () => {
    let aCompany = isNullOrEmptyOrWhitespace(values.company);
    let aRole = isNullOrEmptyOrWhitespace(values.role);
    let aDate = isNullOrEmpty(values.date); // Need to create a time picker that the user can select date and time from...(probably won't be checked except to make sure no future dates/times)
    let aCoverLetter = false; // Just need to check its not null(they selected a document basically or 'No Cover Letter Option')
    let aResume = false; // Same as above
    let aOtherDocs = false; // Same as above
    let aStatus = isNullOrEmptyOrWhitespace(values.status); // Probably won't be needed. Just here for now while I build it out. Status will be preselected to 'applied' but user can change to something else

    setAlerts({
      company: aCompany,
      role: aRole,
      date: aDate,
      coverLetter: aCoverLetter,
      resume: aResume,
      otherDocs: aOtherDocs,
      status: aStatus,
    });

    if (
      aCompany ||
      aRole ||
      aDate ||
      aCoverLetter ||
      aResume ||
      aOtherDocs ||
      aStatus
    ) {
      return;
    }

    // Going to have to revisit if I can just return an item and add in the func added
    let aItems = applicationItems;

    aItems.push({
      id: aItems.length,
      company: values.company,
      role: values.role,
      date: `${values.date}`,
      coverLetter: values.coverLetter,
      resume: values.resume,
      otherDocs: values.otherDocs,
      status: values.status,
    });

    setValues({
      ...values,
      company: null,
      role: null,
      date: null,
      coverLetter: null,
      resume: null,
      otherDocs: null,
      status: null,
    });

    setApplicationItems(aItems);

    handleClose();
  };

  const handleUpload = (e) => {
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
  };

  return (
    <>
      <Card className={classes.root}>
        <div>
          <TextField
            className={classes.inputItems}
            label='Company'
            variant='filled'
            value={values.company}
            onChange={(e) => setValues({ ...values, company: e.target.value })}
          />
          <TextField
            className={classes.inputItems}
            label='Role'
            variant='filled'
            value={values.role}
            onChange={(e) => setValues({ ...values, role: e.target.value })}
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant='inline'
              format='MM/dd/yyyy'
              margin='normal'
              id='date-picker-inline'
              label='Date picker inline'
              value={values.date}
              onChange={(date) =>
                setValues({ ...values, date: `${date.toDateString()}` })
              }
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
        </div>
        <div>
          <div>
            <Typography>
              Cover Letter:{' '}
              <FormControl>
                <Input type='file' onChange={handleUpload} variant='outlined'>
                  Cover Letter Upload
                </Input>
              </FormControl>
            </Typography>
          </div>
          <div>
            <Typography>
              Resume:{' '}
              <FormControl>
                <Input type='file' onChange={handleUpload} variant='outlined'>
                  Resume Upload
                </Input>
              </FormControl>
            </Typography>
          </div>
          <div>
            <Typography>
              Other Documents:{' '}
              <FormControl>
                <Input type='file' onChange={handleUpload} variant='outlined'>
                  Other Documents Upload
                </Input>
              </FormControl>
            </Typography>
          </div>
        </div>
        <div className={classes.statusDiv}>
          <FormControl component='fieldset'>
            <FormLabel component='legend'>Status</FormLabel>
            <RadioGroup
              row
              aria-label='status'
              name='statuss'
              value={values.status}
              onChange={(e) => setValues({ ...values, status: e.target.value })}
            >
              <FormControlLabel
                value='Applied'
                control={<Radio />}
                label='Applied'
              />
              <FormControlLabel
                value='Interviewing'
                control={<Radio />}
                label='Interviewing'
              />
              <FormControlLabel
                value='Rejected'
                control={<Radio />}
                label='Rejected'
              />
              <FormControlLabel
                value='Offered'
                control={<Radio />}
                label='Offered'
              />
              <FormControlLabel
                value='Offer Rejected'
                control={<Radio />}
                label='Offer Rejected'
              />
              <FormControlLabel
                value='Employed'
                control={<Radio />}
                label='Employed'
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div>
          <Button
            className={classes.submitButton}
            onClick={handleAddNewApplication}
          >
            Submit
          </Button>
        </div>
      </Card>
    </>
  );
}
